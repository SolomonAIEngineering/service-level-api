// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"
	"fmt"
	"strconv"
	"testing"

	financial_servicev1 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/financial_service/v1"
	"gorm.io/gen"
	"gorm.io/gen/field"
	"gorm.io/gorm/clause"
)

func init() {
	InitializeDB()
	err := db.AutoMigrate(&financial_servicev1.PlaidAccountInvestmentTransactionORM{})
	if err != nil {
		fmt.Printf("Error: AutoMigrate(&financial_servicev1.PlaidAccountInvestmentTransactionORM{}) fail: %s", err)
	}
}

func Test_plaidAccountInvestmentTransactionORMQuery(t *testing.T) {
	plaidAccountInvestmentTransactionORM := newPlaidAccountInvestmentTransactionORM(db)
	plaidAccountInvestmentTransactionORM = *plaidAccountInvestmentTransactionORM.As(plaidAccountInvestmentTransactionORM.TableName())
	_do := plaidAccountInvestmentTransactionORM.WithContext(context.Background()).Debug()

	primaryKey := field.NewString(plaidAccountInvestmentTransactionORM.TableName(), clause.PrimaryKey)
	_, err := _do.Unscoped().Where(primaryKey.IsNotNull()).Delete()
	if err != nil {
		t.Error("clean table <plaid_account_investment_transactions> fail:", err)
		return
	}

	_, ok := plaidAccountInvestmentTransactionORM.GetFieldByName("")
	if ok {
		t.Error("GetFieldByName(\"\") from plaidAccountInvestmentTransactionORM success")
	}

	err = _do.Create(&financial_servicev1.PlaidAccountInvestmentTransactionORM{})
	if err != nil {
		t.Error("create item in table <plaid_account_investment_transactions> fail:", err)
	}

	err = _do.Save(&financial_servicev1.PlaidAccountInvestmentTransactionORM{})
	if err != nil {
		t.Error("create item in table <plaid_account_investment_transactions> fail:", err)
	}

	err = _do.CreateInBatches([]*financial_servicev1.PlaidAccountInvestmentTransactionORM{{}, {}}, 10)
	if err != nil {
		t.Error("create item in table <plaid_account_investment_transactions> fail:", err)
	}

	_, err = _do.Select(plaidAccountInvestmentTransactionORM.ALL).Take()
	if err != nil {
		t.Error("Take() on table <plaid_account_investment_transactions> fail:", err)
	}

	_, err = _do.First()
	if err != nil {
		t.Error("First() on table <plaid_account_investment_transactions> fail:", err)
	}

	_, err = _do.Last()
	if err != nil {
		t.Error("First() on table <plaid_account_investment_transactions> fail:", err)
	}

	_, err = _do.Where(primaryKey.IsNotNull()).FindInBatch(10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatch() on table <plaid_account_investment_transactions> fail:", err)
	}

	err = _do.Where(primaryKey.IsNotNull()).FindInBatches(&[]*financial_servicev1.PlaidAccountInvestmentTransactionORM{}, 10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatches() on table <plaid_account_investment_transactions> fail:", err)
	}

	_, err = _do.Select(plaidAccountInvestmentTransactionORM.ALL).Where(primaryKey.IsNotNull()).Order(primaryKey.Desc()).Find()
	if err != nil {
		t.Error("Find() on table <plaid_account_investment_transactions> fail:", err)
	}

	_, err = _do.Distinct(primaryKey).Take()
	if err != nil {
		t.Error("select Distinct() on table <plaid_account_investment_transactions> fail:", err)
	}

	_, err = _do.Select(plaidAccountInvestmentTransactionORM.ALL).Omit(primaryKey).Take()
	if err != nil {
		t.Error("Omit() on table <plaid_account_investment_transactions> fail:", err)
	}

	_, err = _do.Group(primaryKey).Find()
	if err != nil {
		t.Error("Group() on table <plaid_account_investment_transactions> fail:", err)
	}

	_, err = _do.Scopes(func(dao gen.Dao) gen.Dao { return dao.Where(primaryKey.IsNotNull()) }).Find()
	if err != nil {
		t.Error("Scopes() on table <plaid_account_investment_transactions> fail:", err)
	}

	_, _, err = _do.FindByPage(0, 1)
	if err != nil {
		t.Error("FindByPage() on table <plaid_account_investment_transactions> fail:", err)
	}

	_, err = _do.ScanByPage(&financial_servicev1.PlaidAccountInvestmentTransactionORM{}, 0, 1)
	if err != nil {
		t.Error("ScanByPage() on table <plaid_account_investment_transactions> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrInit()
	if err != nil {
		t.Error("FirstOrInit() on table <plaid_account_investment_transactions> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrCreate()
	if err != nil {
		t.Error("FirstOrCreate() on table <plaid_account_investment_transactions> fail:", err)
	}

	var _a _another
	var _aPK = field.NewString(_a.TableName(), clause.PrimaryKey)

	err = _do.Join(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("Join() on table <plaid_account_investment_transactions> fail:", err)
	}

	err = _do.LeftJoin(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("LeftJoin() on table <plaid_account_investment_transactions> fail:", err)
	}

	_, err = _do.Not().Or().Clauses().Take()
	if err != nil {
		t.Error("Not/Or/Clauses on table <plaid_account_investment_transactions> fail:", err)
	}
}

var PlaidAccountInvestmentTransactionORMGetRecordByIDTestCase = []TestCase{}

func Test_plaidAccountInvestmentTransactionORM_GetRecordByID(t *testing.T) {
	plaidAccountInvestmentTransactionORM := newPlaidAccountInvestmentTransactionORM(db)
	do := plaidAccountInvestmentTransactionORM.WithContext(context.Background()).Debug()

	for i, tt := range PlaidAccountInvestmentTransactionORMGetRecordByIDTestCase {
		t.Run("GetRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByID(tt.Input.Args[0].(int))
			assert(t, "GetRecordByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var PlaidAccountInvestmentTransactionORMGetRecordByIDsTestCase = []TestCase{}

func Test_plaidAccountInvestmentTransactionORM_GetRecordByIDs(t *testing.T) {
	plaidAccountInvestmentTransactionORM := newPlaidAccountInvestmentTransactionORM(db)
	do := plaidAccountInvestmentTransactionORM.WithContext(context.Background()).Debug()

	for i, tt := range PlaidAccountInvestmentTransactionORMGetRecordByIDsTestCase {
		t.Run("GetRecordByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByIDs(tt.Input.Args[0].([]int))
			assert(t, "GetRecordByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}

var PlaidAccountInvestmentTransactionORMCreateRecordTestCase = []TestCase{}

func Test_plaidAccountInvestmentTransactionORM_CreateRecord(t *testing.T) {
	plaidAccountInvestmentTransactionORM := newPlaidAccountInvestmentTransactionORM(db)
	do := plaidAccountInvestmentTransactionORM.WithContext(context.Background()).Debug()

	for i, tt := range PlaidAccountInvestmentTransactionORMCreateRecordTestCase {
		t.Run("CreateRecord_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.CreateRecord(tt.Input.Args[0].(financial_servicev1.PlaidAccountInvestmentTransactionORM))
			assert(t, "CreateRecord", res1, tt.Expectation.Ret[0])
		})
	}
}

var PlaidAccountInvestmentTransactionORMUpdateRecordByIDTestCase = []TestCase{}

func Test_plaidAccountInvestmentTransactionORM_UpdateRecordByID(t *testing.T) {
	plaidAccountInvestmentTransactionORM := newPlaidAccountInvestmentTransactionORM(db)
	do := plaidAccountInvestmentTransactionORM.WithContext(context.Background()).Debug()

	for i, tt := range PlaidAccountInvestmentTransactionORMUpdateRecordByIDTestCase {
		t.Run("UpdateRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.UpdateRecordByID(tt.Input.Args[0].(int), tt.Input.Args[1].(financial_servicev1.PlaidAccountInvestmentTransactionORM))
			assert(t, "UpdateRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var PlaidAccountInvestmentTransactionORMDeleteRecordByIDTestCase = []TestCase{}

func Test_plaidAccountInvestmentTransactionORM_DeleteRecordByID(t *testing.T) {
	plaidAccountInvestmentTransactionORM := newPlaidAccountInvestmentTransactionORM(db)
	do := plaidAccountInvestmentTransactionORM.WithContext(context.Background()).Debug()

	for i, tt := range PlaidAccountInvestmentTransactionORMDeleteRecordByIDTestCase {
		t.Run("DeleteRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.DeleteRecordByID(tt.Input.Args[0].(int))
			assert(t, "DeleteRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var PlaidAccountInvestmentTransactionORMGetAllRecordsTestCase = []TestCase{}

func Test_plaidAccountInvestmentTransactionORM_GetAllRecords(t *testing.T) {
	plaidAccountInvestmentTransactionORM := newPlaidAccountInvestmentTransactionORM(db)
	do := plaidAccountInvestmentTransactionORM.WithContext(context.Background()).Debug()

	for i, tt := range PlaidAccountInvestmentTransactionORMGetAllRecordsTestCase {
		t.Run("GetAllRecords_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetAllRecords(tt.Input.Args[0].(string), tt.Input.Args[1].(int), tt.Input.Args[2].(int))
			assert(t, "GetAllRecords", res1, tt.Expectation.Ret[0])
			assert(t, "GetAllRecords", res2, tt.Expectation.Ret[1])
		})
	}
}

var PlaidAccountInvestmentTransactionORMCountAllTestCase = []TestCase{}

func Test_plaidAccountInvestmentTransactionORM_CountAll(t *testing.T) {
	plaidAccountInvestmentTransactionORM := newPlaidAccountInvestmentTransactionORM(db)
	do := plaidAccountInvestmentTransactionORM.WithContext(context.Background()).Debug()

	for i, tt := range PlaidAccountInvestmentTransactionORMCountAllTestCase {
		t.Run("CountAll_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.CountAll()
			assert(t, "CountAll", res1, tt.Expectation.Ret[0])
			assert(t, "CountAll", res2, tt.Expectation.Ret[1])
		})
	}
}

var PlaidAccountInvestmentTransactionORMGetByIDTestCase = []TestCase{}

func Test_plaidAccountInvestmentTransactionORM_GetByID(t *testing.T) {
	plaidAccountInvestmentTransactionORM := newPlaidAccountInvestmentTransactionORM(db)
	do := plaidAccountInvestmentTransactionORM.WithContext(context.Background()).Debug()

	for i, tt := range PlaidAccountInvestmentTransactionORMGetByIDTestCase {
		t.Run("GetByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByID(tt.Input.Args[0].(uint64))
			assert(t, "GetByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var PlaidAccountInvestmentTransactionORMGetByIDsTestCase = []TestCase{}

func Test_plaidAccountInvestmentTransactionORM_GetByIDs(t *testing.T) {
	plaidAccountInvestmentTransactionORM := newPlaidAccountInvestmentTransactionORM(db)
	do := plaidAccountInvestmentTransactionORM.WithContext(context.Background()).Debug()

	for i, tt := range PlaidAccountInvestmentTransactionORMGetByIDsTestCase {
		t.Run("GetByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByIDs(tt.Input.Args[0].([]uint64))
			assert(t, "GetByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}
