package financial_servicev1

import (
	fmt "fmt"
	"time"

	"github.com/uptrace/go-clickhouse/ch"
	"github.com/uptrace/go-clickhouse/ch/chschema"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type InvestmentTransactionInternal struct {
	ch.CHModel              `ch:"InvestmentTransactionInternal,partition:toYYYYMM(time)"`
	AccountId               string    `ch:"AccountId,lc"`
	Amount                  float64   `ch:"Amount"`
	CreatedAt               string    `ch:"CreatedAt,lc"`
	CurrentDate             string    `ch:"CurrentDate,lc"`
	Fees                    float64   `ch:"Fees"`
	ID                      string    `ch:"ID,type:String,default:generateUUIDv4(),pk"`
	InvestmentTransactionId string    `ch:"InvestmentTransactionId,lc"`
	IsoCurrencyCode         string    `ch:"IsoCurrencyCode,lc"`
	LinkId                  uint64    `ch:"LinkId"`
	Name                    string    `ch:"Name,lc"`
	Price                   float64   `ch:"Price"`
	Quantity                float64   `ch:"Quantity"`
	SecurityId              string    `ch:"SecurityId,lc"`
	Sign                    int8      `ch:"Sign"`
	Subtype                 string    `ch:"Subtype,lc"`
	Time                    time.Time `ch:"Time,type:DateTime,pk"`
	Type                    string    `ch:"Type,lc"`
	UnofficialCurrencyCode  string    `ch:"UnofficialCurrencyCode,lc"`
	UserId                  string    `ch:"UserId"`
	ProfileType             string    `ch:"ProfileType"`
}

func (source *InvestmentTransactionInternal) ConvertToORM() *InvestmentTransactionORM {
	return &InvestmentTransactionORM{
		AccountId:               source.AccountId,
		Amount:                  source.Amount,
		CreatedAt:               source.CreatedAt,
		CurrentDate:             source.CurrentDate,
		Fees:                    source.Fees,
		Id:                      source.ID,
		InvestmentTransactionId: source.InvestmentTransactionId,
		IsoCurrencyCode:         source.IsoCurrencyCode,
		LinkId:                  source.LinkId,
		Name:                    source.Name,
		Price:                   source.Price,
		Quantity:                source.Quantity,
		SecurityId:              source.SecurityId,
		Sign:                    int32(source.Sign),
		Subtype:                 source.Subtype,
		Time:                    &source.Time,
		Type:                    source.Type,
		UnofficialCurrencyCode:  source.UnofficialCurrencyCode,
		UserId:                  source.UserId,
		ProfileType:             source.ProfileType,
	}
}

func (source *InvestmentTransactionORM) ConvertToInternal() *InvestmentTransactionInternal {
	tx := &InvestmentTransactionInternal{
		AccountId:               source.AccountId,
		Amount:                  source.Amount,
		CreatedAt:               source.CreatedAt,
		CurrentDate:             source.CurrentDate,
		Fees:                    source.Fees,
		ID:                      source.Id,
		InvestmentTransactionId: source.InvestmentTransactionId,
		IsoCurrencyCode:         source.IsoCurrencyCode,
		LinkId:                  source.LinkId,
		Name:                    source.Name,
		Price:                   source.Price,
		Quantity:                source.Quantity,
		SecurityId:              source.SecurityId,
		Sign:                    int8(source.Sign),
		Subtype:                 source.Subtype,
		Type:                    source.Type,
		UnofficialCurrencyCode:  source.UnofficialCurrencyCode,
		UserId:                  source.UserId,
		ProfileType:             source.ProfileType,
	}

	if source.Time != nil {
		tx.Time = *source.Time
	}

	return tx
}

func (internal *InvestmentTransactionInternal) ConvertToInvestmentTransaction() (*InvestmentTransaction, error) {
	tx := &InvestmentTransaction{
		AccountId:               internal.AccountId,
		Ammount:                 fmt.Sprintf("%f", internal.Amount),
		InvestmentTransactionId: internal.InvestmentTransactionId,
		SecurityId:              internal.SecurityId,
		CurrentDate:             internal.CurrentDate,
		Name:                    internal.Name,
		Quantity:                internal.Quantity,
		Amount:                  internal.Amount,
		Price:                   internal.Price,
		Fees:                    internal.Fees,
		Type:                    internal.Type,
		Subtype:                 internal.Subtype,
		IsoCurrencyCode:         internal.IsoCurrencyCode,
		UnofficialCurrencyCode:  internal.UnofficialCurrencyCode,
		LinkId:                  internal.LinkId,
		Id:                      internal.ID,
		UserId:                  internal.UserId,
		CreatedAt:               internal.CreatedAt,
		Sign:                    int32(internal.Sign),
		Time:                    timestamppb.New(internal.Time),
	}

	tx.ProfileType = transformFinancialProfileType(internal.ProfileType)

	return tx, nil
}

func transformFinancialProfileType(profileType string) FinancialUserProfileType {
	switch profileType {
	case FinancialUserProfileType_FINANCIAL_USER_PROFILE_TYPE_BUSINESS.String():
		return FinancialUserProfileType_FINANCIAL_USER_PROFILE_TYPE_BUSINESS
	case FinancialUserProfileType_FINANCIAL_USER_PROFILE_TYPE_USER.String():
		return FinancialUserProfileType_FINANCIAL_USER_PROFILE_TYPE_USER
	default:
		return FinancialUserProfileType_FINANCIAL_USER_PROFILE_TYPE_UNSPECIFIED
	}
}

func (internal *InvestmentTransaction) ConvertToInternal() (*InvestmentTransactionInternal, error) {
	tx := &InvestmentTransactionInternal{
		CHModel:                 chschema.CHModel{},
		AccountId:               internal.AccountId,
		Amount:                  internal.Amount,
		CreatedAt:               internal.CreatedAt,
		CurrentDate:             internal.CurrentDate,
		Fees:                    internal.Fees,
		ID:                      internal.Id,
		InvestmentTransactionId: internal.InvestmentTransactionId,
		IsoCurrencyCode:         internal.IsoCurrencyCode,
		LinkId:                  internal.LinkId,
		Name:                    internal.Name,
		Price:                   internal.Price,
		Quantity:                internal.Quantity,
		SecurityId:              internal.SecurityId,
		Sign:                    int8(internal.Sign),
		Subtype:                 internal.Subtype,
		Time:                    time.Time{},
		Type:                    internal.Type,
		UnofficialCurrencyCode:  internal.UnofficialCurrencyCode,
		UserId:                  internal.UserId,
		ProfileType:             internal.ProfileType.String(),
	}

	if internal.Time != nil {
		tx.Time = internal.Time.AsTime()
	}

	return tx, nil
}
