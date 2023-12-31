// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"
	"fmt"
	"strconv"
	"testing"

	accounting_servicev1 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/accounting_service/v1"
	"gorm.io/gen"
	"gorm.io/gen/field"
	"gorm.io/gorm/clause"
)

func init() {
	InitializeDB()
	err := db.AutoMigrate(&accounting_servicev1.BankInfoORM{})
	if err != nil {
		fmt.Printf("Error: AutoMigrate(&accounting_servicev1.BankInfoORM{}) fail: %s", err)
	}
}

func Test_bankInfoORMQuery(t *testing.T) {
	bankInfoORM := newBankInfoORM(db)
	bankInfoORM = *bankInfoORM.As(bankInfoORM.TableName())
	_do := bankInfoORM.WithContext(context.Background()).Debug()

	primaryKey := field.NewString(bankInfoORM.TableName(), clause.PrimaryKey)
	_, err := _do.Unscoped().Where(primaryKey.IsNotNull()).Delete()
	if err != nil {
		t.Error("clean table <bank_infos> fail:", err)
		return
	}

	_, ok := bankInfoORM.GetFieldByName("")
	if ok {
		t.Error("GetFieldByName(\"\") from bankInfoORM success")
	}

	err = _do.Create(&accounting_servicev1.BankInfoORM{})
	if err != nil {
		t.Error("create item in table <bank_infos> fail:", err)
	}

	err = _do.Save(&accounting_servicev1.BankInfoORM{})
	if err != nil {
		t.Error("create item in table <bank_infos> fail:", err)
	}

	err = _do.CreateInBatches([]*accounting_servicev1.BankInfoORM{{}, {}}, 10)
	if err != nil {
		t.Error("create item in table <bank_infos> fail:", err)
	}

	_, err = _do.Select(bankInfoORM.ALL).Take()
	if err != nil {
		t.Error("Take() on table <bank_infos> fail:", err)
	}

	_, err = _do.First()
	if err != nil {
		t.Error("First() on table <bank_infos> fail:", err)
	}

	_, err = _do.Last()
	if err != nil {
		t.Error("First() on table <bank_infos> fail:", err)
	}

	_, err = _do.Where(primaryKey.IsNotNull()).FindInBatch(10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatch() on table <bank_infos> fail:", err)
	}

	err = _do.Where(primaryKey.IsNotNull()).FindInBatches(&[]*accounting_servicev1.BankInfoORM{}, 10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatches() on table <bank_infos> fail:", err)
	}

	_, err = _do.Select(bankInfoORM.ALL).Where(primaryKey.IsNotNull()).Order(primaryKey.Desc()).Find()
	if err != nil {
		t.Error("Find() on table <bank_infos> fail:", err)
	}

	_, err = _do.Distinct(primaryKey).Take()
	if err != nil {
		t.Error("select Distinct() on table <bank_infos> fail:", err)
	}

	_, err = _do.Select(bankInfoORM.ALL).Omit(primaryKey).Take()
	if err != nil {
		t.Error("Omit() on table <bank_infos> fail:", err)
	}

	_, err = _do.Group(primaryKey).Find()
	if err != nil {
		t.Error("Group() on table <bank_infos> fail:", err)
	}

	_, err = _do.Scopes(func(dao gen.Dao) gen.Dao { return dao.Where(primaryKey.IsNotNull()) }).Find()
	if err != nil {
		t.Error("Scopes() on table <bank_infos> fail:", err)
	}

	_, _, err = _do.FindByPage(0, 1)
	if err != nil {
		t.Error("FindByPage() on table <bank_infos> fail:", err)
	}

	_, err = _do.ScanByPage(&accounting_servicev1.BankInfoORM{}, 0, 1)
	if err != nil {
		t.Error("ScanByPage() on table <bank_infos> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrInit()
	if err != nil {
		t.Error("FirstOrInit() on table <bank_infos> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrCreate()
	if err != nil {
		t.Error("FirstOrCreate() on table <bank_infos> fail:", err)
	}

	var _a _another
	var _aPK = field.NewString(_a.TableName(), clause.PrimaryKey)

	err = _do.Join(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("Join() on table <bank_infos> fail:", err)
	}

	err = _do.LeftJoin(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("LeftJoin() on table <bank_infos> fail:", err)
	}

	_, err = _do.Not().Or().Clauses().Take()
	if err != nil {
		t.Error("Not/Or/Clauses on table <bank_infos> fail:", err)
	}
}

var BankInfoORMGetRecordByIDTestCase = []TestCase{}

func Test_bankInfoORM_GetRecordByID(t *testing.T) {
	bankInfoORM := newBankInfoORM(db)
	do := bankInfoORM.WithContext(context.Background()).Debug()

	for i, tt := range BankInfoORMGetRecordByIDTestCase {
		t.Run("GetRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByID(tt.Input.Args[0].(int))
			assert(t, "GetRecordByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var BankInfoORMGetRecordByIDsTestCase = []TestCase{}

func Test_bankInfoORM_GetRecordByIDs(t *testing.T) {
	bankInfoORM := newBankInfoORM(db)
	do := bankInfoORM.WithContext(context.Background()).Debug()

	for i, tt := range BankInfoORMGetRecordByIDsTestCase {
		t.Run("GetRecordByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByIDs(tt.Input.Args[0].([]int))
			assert(t, "GetRecordByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}

var BankInfoORMCreateRecordTestCase = []TestCase{}

func Test_bankInfoORM_CreateRecord(t *testing.T) {
	bankInfoORM := newBankInfoORM(db)
	do := bankInfoORM.WithContext(context.Background()).Debug()

	for i, tt := range BankInfoORMCreateRecordTestCase {
		t.Run("CreateRecord_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.CreateRecord(tt.Input.Args[0].(accounting_servicev1.BankInfoORM))
			assert(t, "CreateRecord", res1, tt.Expectation.Ret[0])
		})
	}
}

var BankInfoORMUpdateRecordByIDTestCase = []TestCase{}

func Test_bankInfoORM_UpdateRecordByID(t *testing.T) {
	bankInfoORM := newBankInfoORM(db)
	do := bankInfoORM.WithContext(context.Background()).Debug()

	for i, tt := range BankInfoORMUpdateRecordByIDTestCase {
		t.Run("UpdateRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.UpdateRecordByID(tt.Input.Args[0].(int), tt.Input.Args[1].(accounting_servicev1.BankInfoORM))
			assert(t, "UpdateRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var BankInfoORMDeleteRecordByIDTestCase = []TestCase{}

func Test_bankInfoORM_DeleteRecordByID(t *testing.T) {
	bankInfoORM := newBankInfoORM(db)
	do := bankInfoORM.WithContext(context.Background()).Debug()

	for i, tt := range BankInfoORMDeleteRecordByIDTestCase {
		t.Run("DeleteRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.DeleteRecordByID(tt.Input.Args[0].(int))
			assert(t, "DeleteRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var BankInfoORMGetAllRecordsTestCase = []TestCase{}

func Test_bankInfoORM_GetAllRecords(t *testing.T) {
	bankInfoORM := newBankInfoORM(db)
	do := bankInfoORM.WithContext(context.Background()).Debug()

	for i, tt := range BankInfoORMGetAllRecordsTestCase {
		t.Run("GetAllRecords_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetAllRecords(tt.Input.Args[0].(string), tt.Input.Args[1].(int), tt.Input.Args[2].(int))
			assert(t, "GetAllRecords", res1, tt.Expectation.Ret[0])
			assert(t, "GetAllRecords", res2, tt.Expectation.Ret[1])
		})
	}
}

var BankInfoORMCountAllTestCase = []TestCase{}

func Test_bankInfoORM_CountAll(t *testing.T) {
	bankInfoORM := newBankInfoORM(db)
	do := bankInfoORM.WithContext(context.Background()).Debug()

	for i, tt := range BankInfoORMCountAllTestCase {
		t.Run("CountAll_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.CountAll()
			assert(t, "CountAll", res1, tt.Expectation.Ret[0])
			assert(t, "CountAll", res2, tt.Expectation.Ret[1])
		})
	}
}

var BankInfoORMGetByIDTestCase = []TestCase{}

func Test_bankInfoORM_GetByID(t *testing.T) {
	bankInfoORM := newBankInfoORM(db)
	do := bankInfoORM.WithContext(context.Background()).Debug()

	for i, tt := range BankInfoORMGetByIDTestCase {
		t.Run("GetByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByID(tt.Input.Args[0].(uint64))
			assert(t, "GetByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var BankInfoORMGetByIDsTestCase = []TestCase{}

func Test_bankInfoORM_GetByIDs(t *testing.T) {
	bankInfoORM := newBankInfoORM(db)
	do := bankInfoORM.WithContext(context.Background()).Debug()

	for i, tt := range BankInfoORMGetByIDsTestCase {
		t.Run("GetByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByIDs(tt.Input.Args[0].([]uint64))
			assert(t, "GetByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}
