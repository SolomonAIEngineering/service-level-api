package financial_servicev1

import (
	context "context"
	time "time"

	"github.com/uptrace/go-clickhouse/ch"
	"github.com/uptrace/go-clickhouse/ch/chschema"
)

type TransactionInternal struct {
	ch.CHModel                      `ch:"TransactionInternal,partition:toYYYYMM(time)"`
	AccountId                       string    `ch:"AccountId,lc"`
	AccountOwner                    string    `ch:"AccountOwner,lc"`
	Amount                          float64   `ch:"Amount"`
	AuthorizedDate                  string    `ch:"AuthorizedDate,lc"`
	AuthorizedDatetime              string    `ch:"AuthorizedDatetime,lc"`
	CategoryId                      string    `ch:"CategoryId,lc"`
	CheckNumber                     string    `ch:"CheckNumber,lc"`
	CurrentDate                     string    `ch:"CurrentDate,lc"`
	CurrentDatetime                 string    `ch:"CurrentDatetime,lc"`
	ID                              string    `ch:"ID,type:String,default:generateUUIDv4(),pk"`
	IsoCurrencyCode                 string    `ch:"IsoCurrencyCode,lc"`
	LinkId                          uint64    `ch:"LinkId"`
	LocationAddress                 string    `ch:"LocationAddress,lc"`
	LocationCity                    string    `ch:"LocationCity,lc"`
	LocationCountry                 string    `ch:"LocationCountry,lc"`
	LocationLat                     float64   `ch:"LocationLat"`
	LocationLon                     float64   `ch:"LocationLon"`
	LocationPostalCode              string    `ch:"LocationPostalCode,lc"`
	LocationRegion                  string    `ch:"LocationRegion,lc"`
	LocationStoreNumber             string    `ch:"LocationStoreNumber,lc"`
	MerchantName                    string    `ch:"MerchantName,lc"`
	Name                            string    `ch:"Name,lc"`
	PaymentChannel                  string    `ch:"PaymentChannel,lc"`
	PaymentMetaByOrderOf            string    `ch:"PaymentMetaByOrderOf,lc"`
	PaymentMetaPayee                string    `ch:"PaymentMetaPayee,lc"`
	PaymentMetaPayer                string    `ch:"PaymentMetaPayer,lc"`
	PaymentMetaPaymentMethod        string    `ch:"PaymentMetaPaymentMethod,lc"`
	PaymentMetaPaymentProcessor     string    `ch:"PaymentMetaPaymentProcessor,lc"`
	PaymentMetaPpdId                string    `ch:"PaymentMetaPpdId,lc"`
	PaymentMetaReason               string    `ch:"PaymentMetaReason,lc"`
	PaymentMetaReferenceNumber      string    `ch:"PaymentMetaReferenceNumber,lc"`
	Pending                         bool      `ch:"Pending"`
	PendingTransactionId            string    `ch:"PendingTransactionId,lc"`
	PersonalFinanceCategoryDetailed string    `ch:"PersonalFinanceCategoryDetailed,lc"`
	PersonalFinanceCategoryPrimary  string    `ch:"PersonalFinanceCategoryPrimary,lc"`
	Sign                            int8      `ch:"Sign"`
	Time                            time.Time `ch:"Time,pk"`
	TransactionCode                 string    `ch:"TransactionCode,lc"`
	TransactionId                   string    `ch:"TransactionId,lc"`
	UnofficialCurrencyCode          string    `ch:"UnofficialCurrencyCode,lc"`
	UserId                          string    `ch:"UserId"`
	Categories                      []string  `ch:"Categories"`
	ProfileType                     string    `ch:"ProfileType,lc"`
}

func (internal *TransactionInternal) ConvertToTransaction() (*Transaction, error) {
	ctx := context.Background()
	ormRec := internal.ConvertToORM()
	tx, err := ormRec.ToPB(ctx)
	if err != nil {
		return nil, err
	}

	return &tx, nil
}

func (internal *Transaction) ConvertToInternal() (*TransactionInternal, error) {
	tx := &TransactionInternal{
		AccountId:                       internal.AccountId,
		AccountOwner:                    internal.AccountOwner,
		Amount:                          internal.Amount,
		AuthorizedDate:                  internal.AuthorizedDate,
		AuthorizedDatetime:              internal.AuthorizedDatetime,
		CategoryId:                      internal.CategoryId,
		CheckNumber:                     internal.CheckNumber,
		CurrentDate:                     internal.CurrentDate,
		CurrentDatetime:                 internal.CurrentDatetime,
		ID:                              internal.Id,
		IsoCurrencyCode:                 internal.IsoCurrencyCode,
		LinkId:                          internal.LinkId,
		LocationAddress:                 internal.LocationAddress,
		LocationCity:                    internal.LocationCity,
		LocationCountry:                 internal.LocationCountry,
		LocationLat:                     internal.LocationLat,
		LocationLon:                     internal.LocationLon,
		LocationPostalCode:              internal.LocationPostalCode,
		LocationRegion:                  internal.LocationRegion,
		LocationStoreNumber:             internal.LocationStoreNumber,
		MerchantName:                    internal.MerchantName,
		Name:                            internal.Name,
		PaymentChannel:                  internal.PaymentChannel,
		PaymentMetaByOrderOf:            internal.PaymentMetaByOrderOf,
		PaymentMetaPayee:                internal.PaymentMetaPayee,
		PaymentMetaPayer:                internal.PaymentMetaPayer,
		PaymentMetaPaymentMethod:        internal.PaymentMetaPaymentMethod,
		PaymentMetaPaymentProcessor:     internal.PaymentMetaPaymentProcessor,
		PaymentMetaPpdId:                internal.PaymentMetaPpdId,
		PaymentMetaReason:               internal.PaymentMetaReason,
		PaymentMetaReferenceNumber:      internal.PaymentMetaReferenceNumber,
		Pending:                         internal.Pending,
		PendingTransactionId:            internal.PendingTransactionId,
		PersonalFinanceCategoryDetailed: internal.PersonalFinanceCategoryDetailed,
		PersonalFinanceCategoryPrimary:  internal.PersonalFinanceCategoryPrimary,
		Sign:                            int8(internal.Sign),
		TransactionCode:                 internal.TransactionCode,
		TransactionId:                   internal.TransactionId,
		UnofficialCurrencyCode:          internal.UnofficialCurrencyCode,
		UserId:                          internal.UserId,
		Categories:                      internal.Categories,
		ProfileType:                     internal.ProfileType.String(),
	}

	if internal.Time != nil {
		tx.Time = internal.Time.AsTime()
	}

	return tx, nil
}

func (internal *TransactionInternal) ConvertToORM() *TransactionORM {
	return &TransactionORM{
		AccountId:                       internal.AccountId,
		AccountOwner:                    internal.AccountOwner,
		Amount:                          internal.Amount,
		AuthorizedDate:                  internal.AuthorizedDate,
		AuthorizedDatetime:              internal.AuthorizedDatetime,
		Categories:                      internal.Categories,
		CategoryId:                      internal.CategoryId,
		CheckNumber:                     internal.CheckNumber,
		CurrentDate:                     internal.CurrentDate,
		CurrentDatetime:                 internal.CurrentDatetime,
		Id:                              internal.ID,
		IsoCurrencyCode:                 internal.IsoCurrencyCode,
		LinkId:                          internal.LinkId,
		LocationAddress:                 internal.LocationAddress,
		LocationCity:                    internal.LocationCity,
		LocationCountry:                 internal.LocationCountry,
		LocationLat:                     internal.LocationLat,
		LocationLon:                     internal.LocationLon,
		LocationPostalCode:              internal.LocationPostalCode,
		LocationRegion:                  internal.LocationRegion,
		LocationStoreNumber:             internal.LocationStoreNumber,
		MerchantName:                    internal.MerchantName,
		Name:                            internal.Name,
		PaymentChannel:                  internal.PaymentChannel,
		PaymentMetaByOrderOf:            internal.PaymentMetaByOrderOf,
		PaymentMetaPayee:                internal.PaymentMetaPayee,
		PaymentMetaPayer:                internal.PaymentMetaPayer,
		PaymentMetaPaymentMethod:        internal.PaymentMetaPaymentMethod,
		PaymentMetaPaymentProcessor:     internal.PaymentMetaPaymentProcessor,
		PaymentMetaPpdId:                internal.PaymentMetaPpdId,
		PaymentMetaReason:               internal.PaymentMetaReason,
		PaymentMetaReferenceNumber:      internal.PaymentMetaReferenceNumber,
		Pending:                         internal.Pending,
		PendingTransactionId:            internal.PendingTransactionId,
		PersonalFinanceCategoryDetailed: internal.PersonalFinanceCategoryDetailed,
		PersonalFinanceCategoryPrimary:  internal.PersonalFinanceCategoryPrimary,
		Sign:                            int32(internal.Sign),
		Time:                            &internal.Time,
		TransactionCode:                 internal.TransactionCode,
		TransactionId:                   internal.TransactionId,
		UnofficialCurrencyCode:          internal.UnofficialCurrencyCode,
		UserId:                          internal.UserId,
		ProfileType:                     internal.ProfileType,
	}
}

// Converts from TransactionORM to TransactionInternal
func (orm *TransactionORM) ConvertToInternal() *TransactionInternal {
	tx := &TransactionInternal{
		CHModel:                         chschema.CHModel{},
		AccountId:                       orm.AccountId,
		AccountOwner:                    orm.AccountOwner,
		Amount:                          orm.Amount,
		AuthorizedDate:                  orm.AuthorizedDate,
		AuthorizedDatetime:              orm.AuthorizedDatetime,
		CategoryId:                      orm.CategoryId,
		CheckNumber:                     orm.CheckNumber,
		CurrentDate:                     orm.CurrentDate,
		CurrentDatetime:                 orm.CurrentDatetime,
		ID:                              orm.Id,
		IsoCurrencyCode:                 orm.IsoCurrencyCode,
		LinkId:                          orm.LinkId,
		LocationAddress:                 orm.LocationAddress,
		LocationCity:                    orm.LocationCity,
		LocationCountry:                 orm.LocationCountry,
		LocationLat:                     orm.LocationLat,
		LocationLon:                     orm.LocationLon,
		LocationPostalCode:              orm.LocationPostalCode,
		LocationRegion:                  orm.LocationRegion,
		LocationStoreNumber:             orm.LocationStoreNumber,
		MerchantName:                    orm.MerchantName,
		Name:                            orm.Name,
		PaymentChannel:                  orm.PaymentChannel,
		PaymentMetaByOrderOf:            orm.PaymentMetaByOrderOf,
		PaymentMetaPayee:                orm.PaymentMetaPayee,
		PaymentMetaPayer:                orm.PaymentMetaPayer,
		PaymentMetaPaymentMethod:        orm.PaymentMetaPaymentMethod,
		PaymentMetaPaymentProcessor:     orm.PaymentMetaPaymentProcessor,
		PaymentMetaPpdId:                orm.PaymentMetaPpdId,
		PaymentMetaReason:               orm.PaymentMetaReason,
		PaymentMetaReferenceNumber:      orm.PaymentMetaReferenceNumber,
		Pending:                         orm.Pending,
		PendingTransactionId:            orm.PendingTransactionId,
		PersonalFinanceCategoryDetailed: orm.PersonalFinanceCategoryDetailed,
		PersonalFinanceCategoryPrimary:  orm.PersonalFinanceCategoryPrimary,
		Sign:                            int8(orm.Sign),
		Time:                            time.Time{},
		TransactionCode:                 orm.TransactionCode,
		TransactionId:                   orm.TransactionId,
		UnofficialCurrencyCode:          orm.UnofficialCurrencyCode,
		UserId:                          orm.UserId,
		Categories:                      orm.Categories,
		ProfileType:                     orm.ProfileType,
	}

	if orm.Time != nil {
		tx.Time = *orm.Time
	}

	return tx
}
