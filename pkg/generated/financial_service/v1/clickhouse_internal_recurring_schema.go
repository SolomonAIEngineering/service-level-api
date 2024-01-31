package financial_servicev1

import (
	context "context"
	time "time"

	"github.com/uptrace/go-clickhouse/ch"
)

type ReOccuringTransactionInternal struct {
	ch.CHModel                      `ch:"ReOccuringTransactionInternal,partition:toYYYYMM(time)"`
	AccountId                       string    `ch:"AccountId,lc"`
	AverageAmount                   string    `ch:"AverageAmount,lc"`
	AverageAmountIsoCurrencyCode    string    `ch:"AverageAmountIsoCurrencyCode,lc"`
	CategoryId                      string    `ch:"CategoryId,lc"`
	Description                     string    `ch:"Description,lc"`
	FirstDate                       string    `ch:"FirstDate,lc"`
	Flow                            string    `ch:"Flow,lc"`
	Frequency                       string    `ch:"Frequency,lc"`
	ID                              string    `ch:"ID,type:String,default:generateUUIDv4(),pk"`
	IsActive                        bool      `ch:"IsActive"`
	LastAmount                      string    `ch:"LastAmount,lc"`
	LastAmountIsoCurrencyCode       string    `ch:"LastAmountIsoCurrencyCode,lc"`
	LastDate                        string    `ch:"LastDate,lc"`
	LinkId                          uint64    `ch:"LinkId"`
	MerchantName                    string    `ch:"MerchantName,lc"`
	PersonalFinanceCategoryDetailed string    `ch:"PersonalFinanceCategoryDetailed,lc"`
	PersonalFinanceCategoryPrimary  string    `ch:"PersonalFinanceCategoryPrimary,lc"`
	Sign                            int8      `ch:"Sign"`
	Status                          string    `ch:"Status,lc"`
	StreamId                        string    `ch:"StreamId,lc"`
	Time                            time.Time `ch:"Time,pk"`
	TransactionIds                  string    `ch:"TransactionIds,lc"`
	UpdatedTime                     string    `ch:"UpdatedTime,lc"`
	UserId                          string    `ch:"UserId"`
	ProfileType                     string    `ch:"ProfileType,lc"`
}

// Converts from ReOccuringTransactionInternal to ReOccuringTransactionORM
func (internal *ReOccuringTransactionInternal) ConvertToORM() *ReOccuringTransactionORM {
	return &ReOccuringTransactionORM{
		AccountId:                       internal.AccountId,
		AverageAmount:                   internal.AverageAmount,
		AverageAmountIsoCurrencyCode:    internal.AverageAmountIsoCurrencyCode,
		CategoryId:                      internal.CategoryId,
		Description:                     internal.Description,
		FirstDate:                       internal.FirstDate,
		Flow:                            internal.Flow,
		Frequency:                       internal.Frequency,
		Id:                              internal.ID,
		IsActive:                        internal.IsActive,
		LastAmount:                      internal.LastAmount,
		LastAmountIsoCurrencyCode:       internal.LastAmountIsoCurrencyCode,
		LastDate:                        internal.LastDate,
		LinkId:                          internal.LinkId,
		MerchantName:                    internal.MerchantName,
		PersonalFinanceCategoryDetailed: internal.PersonalFinanceCategoryDetailed,
		PersonalFinanceCategoryPrimary:  internal.PersonalFinanceCategoryPrimary,
		Sign:                            int32(internal.Sign),
		Status:                          internal.Status,
		StreamId:                        internal.StreamId,
		Time:                            &internal.Time,
		TransactionIds:                  internal.TransactionIds,
		UpdatedTime:                     internal.UpdatedTime,
		UserId:                          internal.UserId,
		ProfileType:                     internal.ProfileType,
	}
}

func (internal *ReOccuringTransactionInternal) ConvertToRecurringTransaction() (*ReOccuringTransaction, error) {
	ctx := context.Background()
	ormRec := internal.ConvertToORM()
	tx, err := ormRec.ToPB(ctx)
	if err != nil {
		return nil, err
	}

	return &tx, nil
}

func (internal *ReOccuringTransaction) ConvertToInternal() (*ReOccuringTransactionInternal, error) {
	time := internal.Time.AsTime()
	ormRec := &ReOccuringTransactionORM{
		AccountId:                       internal.AccountId,
		AverageAmount:                   internal.AverageAmount,
		AverageAmountIsoCurrencyCode:    internal.AverageAmountIsoCurrencyCode,
		CategoryId:                      internal.CategoryId,
		Description:                     internal.Description,
		FirstDate:                       internal.FirstDate,
		Flow:                            internal.Flow.String(),
		Frequency:                       internal.Frequency.String(),
		Id:                              internal.Id,
		IsActive:                        internal.IsActive,
		LastAmount:                      internal.LastAmount,
		LastAmountIsoCurrencyCode:       internal.LastAmountIsoCurrencyCode,
		LastDate:                        internal.LastDate,
		LinkId:                          internal.LinkId,
		MerchantName:                    internal.MerchantName,
		PersonalFinanceCategoryDetailed: internal.PersonalFinanceCategoryDetailed,
		PersonalFinanceCategoryPrimary:  internal.PersonalFinanceCategoryPrimary,
		Sign:                            internal.Sign,
		Status:                          internal.Status.String(),
		StreamId:                        internal.StreamId,
		Time:                            &time,
		TransactionIds:                  internal.TransactionIds,
		UpdatedTime:                     internal.UpdatedTime,
		UserId:                          internal.UserId,
		ProfileType:                     internal.ProfileType.String(),
	}

	tx := ormRec.ConvertToInternal()
	return tx, nil
}

// Converts from ReOccuringTransactionORM to ReOccuringTransactionInternal
func (orm *ReOccuringTransactionORM) ConvertToInternal() *ReOccuringTransactionInternal {
	tx := &ReOccuringTransactionInternal{
		AccountId:                       orm.AccountId,
		AverageAmount:                   orm.AverageAmount,
		AverageAmountIsoCurrencyCode:    orm.AverageAmountIsoCurrencyCode,
		CategoryId:                      orm.CategoryId,
		Description:                     orm.Description,
		FirstDate:                       orm.FirstDate,
		Flow:                            orm.Flow,
		Frequency:                       orm.Frequency,
		ID:                              orm.Id,
		IsActive:                        orm.IsActive,
		LastAmount:                      orm.LastAmount,
		LastAmountIsoCurrencyCode:       orm.LastAmountIsoCurrencyCode,
		LastDate:                        orm.LastDate,
		LinkId:                          orm.LinkId,
		MerchantName:                    orm.MerchantName,
		PersonalFinanceCategoryDetailed: orm.PersonalFinanceCategoryDetailed,
		PersonalFinanceCategoryPrimary:  orm.PersonalFinanceCategoryPrimary,
		Sign:                            int8(orm.Sign),
		Status:                          orm.Status,
		StreamId:                        orm.StreamId,
		TransactionIds:                  orm.TransactionIds,
		UpdatedTime:                     orm.UpdatedTime,
		UserId:                          orm.UserId,
		ProfileType:                     orm.ProfileType,
	}

	if orm.Time != nil {
		tx.Time = *orm.Time
	}

	return tx
}
