package financial_servicev1

import (
	time "time"

	"github.com/uptrace/go-clickhouse/ch"
	"github.com/uptrace/go-clickhouse/ch/chschema"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
)

type AccountBalanceHistoryInternal struct {
	ch.CHModel      `ch:"AccountBalanceHistoryInternal,partition:toYYYYMM(time)"`
	Time            time.Time `ch:"Time,pk"`
	AccountId       string    `ch:"AccountId,lc"`
	IsoCurrencyCode string    `ch:"IsoCurrencyCode,lc"`
	Balance         float64   `ch:"Balance"`
	UserId          uint64    `ch:"UserId"`
	Sign            int8      `ch:"Sign"`
	Id              string    `ch:"Id,type:String,default:generateUUIDv4(),pk"`
}

func (source *AccountBalanceHistoryInternal) ConvertToORM() *AccountBalanceHistoryORM {
	return &AccountBalanceHistoryORM{
		AccountId:       source.AccountId,
		Balance:         source.Balance,
		Id:              source.Id,
		IsoCurrencyCode: source.IsoCurrencyCode,
		Sign:            uint32(source.Sign),
		UserId:          source.UserId,
	}
}

func (source *AccountBalanceHistoryORM) ConvertToInternal() *AccountBalanceHistoryInternal {
	res := &AccountBalanceHistoryInternal{
		CHModel:         chschema.CHModel{},
		AccountId:       source.AccountId,
		IsoCurrencyCode: source.IsoCurrencyCode,
		Balance:         source.Balance,
		UserId:          source.UserId,
		Sign:            int8(source.Sign),
		Id:              source.Id,
	}

	if source.Time != nil {
		res.Time = *source.Time
	}

	return res
}

func (internal *AccountBalanceHistory) ConvertToInternal() (*AccountBalanceHistoryInternal, error) {
	tx := &AccountBalanceHistoryInternal{
		CHModel:         chschema.CHModel{},
		AccountId:       internal.AccountId,
		IsoCurrencyCode: internal.IsoCurrencyCode,
		Balance:         internal.Balance,
		UserId:          internal.UserId,
		Sign:            int8(internal.Sign),
		Id:              internal.Id,
	}

	if internal.Time != nil {
		tx.Time = internal.Time.AsTime()
	}

	return tx, nil
}

func (internal *AccountBalanceHistoryInternal) ConvertTo() (*AccountBalanceHistory, error) {
	tx := &AccountBalanceHistory{
		AccountId:       internal.AccountId,
		Balance:         internal.Balance,
		Id:              internal.Id,
		IsoCurrencyCode: internal.IsoCurrencyCode,
		Sign:            uint32(internal.Sign),
		Time:            timestamppb.New(internal.Time),
		UserId:          internal.UserId,
	}

	return tx, nil
}
