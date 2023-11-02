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
	err := db.AutoMigrate(&financial_servicev1.LinkedAccountingAccountORM{})
	if err != nil {
		fmt.Printf("Error: AutoMigrate(&financial_servicev1.LinkedAccountingAccountORM{}) fail: %s", err)
	}
}

func Test_linkedAccountingAccountORMQuery(t *testing.T) {
	linkedAccountingAccountORM := newLinkedAccountingAccountORM(db)
	linkedAccountingAccountORM = *linkedAccountingAccountORM.As(linkedAccountingAccountORM.TableName())
	_do := linkedAccountingAccountORM.WithContext(context.Background()).Debug()

	primaryKey := field.NewString(linkedAccountingAccountORM.TableName(), clause.PrimaryKey)
	_, err := _do.Unscoped().Where(primaryKey.IsNotNull()).Delete()
	if err != nil {
		t.Error("clean table <linked_accounting_accounts> fail:", err)
		return
	}

	_, ok := linkedAccountingAccountORM.GetFieldByName("")
	if ok {
		t.Error("GetFieldByName(\"\") from linkedAccountingAccountORM success")
	}

	err = _do.Create(&financial_servicev1.LinkedAccountingAccountORM{})
	if err != nil {
		t.Error("create item in table <linked_accounting_accounts> fail:", err)
	}

	err = _do.Save(&financial_servicev1.LinkedAccountingAccountORM{})
	if err != nil {
		t.Error("create item in table <linked_accounting_accounts> fail:", err)
	}

	err = _do.CreateInBatches([]*financial_servicev1.LinkedAccountingAccountORM{{}, {}}, 10)
	if err != nil {
		t.Error("create item in table <linked_accounting_accounts> fail:", err)
	}

	_, err = _do.Select(linkedAccountingAccountORM.ALL).Take()
	if err != nil {
		t.Error("Take() on table <linked_accounting_accounts> fail:", err)
	}

	_, err = _do.First()
	if err != nil {
		t.Error("First() on table <linked_accounting_accounts> fail:", err)
	}

	_, err = _do.Last()
	if err != nil {
		t.Error("First() on table <linked_accounting_accounts> fail:", err)
	}

	_, err = _do.Where(primaryKey.IsNotNull()).FindInBatch(10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatch() on table <linked_accounting_accounts> fail:", err)
	}

	err = _do.Where(primaryKey.IsNotNull()).FindInBatches(&[]*financial_servicev1.LinkedAccountingAccountORM{}, 10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatches() on table <linked_accounting_accounts> fail:", err)
	}

	_, err = _do.Select(linkedAccountingAccountORM.ALL).Where(primaryKey.IsNotNull()).Order(primaryKey.Desc()).Find()
	if err != nil {
		t.Error("Find() on table <linked_accounting_accounts> fail:", err)
	}

	_, err = _do.Distinct(primaryKey).Take()
	if err != nil {
		t.Error("select Distinct() on table <linked_accounting_accounts> fail:", err)
	}

	_, err = _do.Select(linkedAccountingAccountORM.ALL).Omit(primaryKey).Take()
	if err != nil {
		t.Error("Omit() on table <linked_accounting_accounts> fail:", err)
	}

	_, err = _do.Group(primaryKey).Find()
	if err != nil {
		t.Error("Group() on table <linked_accounting_accounts> fail:", err)
	}

	_, err = _do.Scopes(func(dao gen.Dao) gen.Dao { return dao.Where(primaryKey.IsNotNull()) }).Find()
	if err != nil {
		t.Error("Scopes() on table <linked_accounting_accounts> fail:", err)
	}

	_, _, err = _do.FindByPage(0, 1)
	if err != nil {
		t.Error("FindByPage() on table <linked_accounting_accounts> fail:", err)
	}

	_, err = _do.ScanByPage(&financial_servicev1.LinkedAccountingAccountORM{}, 0, 1)
	if err != nil {
		t.Error("ScanByPage() on table <linked_accounting_accounts> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrInit()
	if err != nil {
		t.Error("FirstOrInit() on table <linked_accounting_accounts> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrCreate()
	if err != nil {
		t.Error("FirstOrCreate() on table <linked_accounting_accounts> fail:", err)
	}

	var _a _another
	var _aPK = field.NewString(_a.TableName(), clause.PrimaryKey)

	err = _do.Join(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("Join() on table <linked_accounting_accounts> fail:", err)
	}

	err = _do.LeftJoin(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("LeftJoin() on table <linked_accounting_accounts> fail:", err)
	}

	_, err = _do.Not().Or().Clauses().Take()
	if err != nil {
		t.Error("Not/Or/Clauses on table <linked_accounting_accounts> fail:", err)
	}
}

var LinkedAccountingAccountORMGetRecordByIDTestCase = []TestCase{}

func Test_linkedAccountingAccountORM_GetRecordByID(t *testing.T) {
	linkedAccountingAccountORM := newLinkedAccountingAccountORM(db)
	do := linkedAccountingAccountORM.WithContext(context.Background()).Debug()

	for i, tt := range LinkedAccountingAccountORMGetRecordByIDTestCase {
		t.Run("GetRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByID(tt.Input.Args[0].(int))
			assert(t, "GetRecordByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var LinkedAccountingAccountORMGetRecordByIDsTestCase = []TestCase{}

func Test_linkedAccountingAccountORM_GetRecordByIDs(t *testing.T) {
	linkedAccountingAccountORM := newLinkedAccountingAccountORM(db)
	do := linkedAccountingAccountORM.WithContext(context.Background()).Debug()

	for i, tt := range LinkedAccountingAccountORMGetRecordByIDsTestCase {
		t.Run("GetRecordByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByIDs(tt.Input.Args[0].([]int))
			assert(t, "GetRecordByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}

var LinkedAccountingAccountORMCreateRecordTestCase = []TestCase{}

func Test_linkedAccountingAccountORM_CreateRecord(t *testing.T) {
	linkedAccountingAccountORM := newLinkedAccountingAccountORM(db)
	do := linkedAccountingAccountORM.WithContext(context.Background()).Debug()

	for i, tt := range LinkedAccountingAccountORMCreateRecordTestCase {
		t.Run("CreateRecord_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.CreateRecord(tt.Input.Args[0].(financial_servicev1.LinkedAccountingAccountORM))
			assert(t, "CreateRecord", res1, tt.Expectation.Ret[0])
		})
	}
}

var LinkedAccountingAccountORMUpdateRecordByIDTestCase = []TestCase{}

func Test_linkedAccountingAccountORM_UpdateRecordByID(t *testing.T) {
	linkedAccountingAccountORM := newLinkedAccountingAccountORM(db)
	do := linkedAccountingAccountORM.WithContext(context.Background()).Debug()

	for i, tt := range LinkedAccountingAccountORMUpdateRecordByIDTestCase {
		t.Run("UpdateRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.UpdateRecordByID(tt.Input.Args[0].(int), tt.Input.Args[1].(financial_servicev1.LinkedAccountingAccountORM))
			assert(t, "UpdateRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var LinkedAccountingAccountORMDeleteRecordByIDTestCase = []TestCase{}

func Test_linkedAccountingAccountORM_DeleteRecordByID(t *testing.T) {
	linkedAccountingAccountORM := newLinkedAccountingAccountORM(db)
	do := linkedAccountingAccountORM.WithContext(context.Background()).Debug()

	for i, tt := range LinkedAccountingAccountORMDeleteRecordByIDTestCase {
		t.Run("DeleteRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.DeleteRecordByID(tt.Input.Args[0].(int))
			assert(t, "DeleteRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var LinkedAccountingAccountORMGetAllRecordsTestCase = []TestCase{}

func Test_linkedAccountingAccountORM_GetAllRecords(t *testing.T) {
	linkedAccountingAccountORM := newLinkedAccountingAccountORM(db)
	do := linkedAccountingAccountORM.WithContext(context.Background()).Debug()

	for i, tt := range LinkedAccountingAccountORMGetAllRecordsTestCase {
		t.Run("GetAllRecords_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetAllRecords(tt.Input.Args[0].(string), tt.Input.Args[1].(int), tt.Input.Args[2].(int))
			assert(t, "GetAllRecords", res1, tt.Expectation.Ret[0])
			assert(t, "GetAllRecords", res2, tt.Expectation.Ret[1])
		})
	}
}

var LinkedAccountingAccountORMCountAllTestCase = []TestCase{}

func Test_linkedAccountingAccountORM_CountAll(t *testing.T) {
	linkedAccountingAccountORM := newLinkedAccountingAccountORM(db)
	do := linkedAccountingAccountORM.WithContext(context.Background()).Debug()

	for i, tt := range LinkedAccountingAccountORMCountAllTestCase {
		t.Run("CountAll_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.CountAll()
			assert(t, "CountAll", res1, tt.Expectation.Ret[0])
			assert(t, "CountAll", res2, tt.Expectation.Ret[1])
		})
	}
}

var LinkedAccountingAccountORMGetByIDTestCase = []TestCase{}

func Test_linkedAccountingAccountORM_GetByID(t *testing.T) {
	linkedAccountingAccountORM := newLinkedAccountingAccountORM(db)
	do := linkedAccountingAccountORM.WithContext(context.Background()).Debug()

	for i, tt := range LinkedAccountingAccountORMGetByIDTestCase {
		t.Run("GetByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByID(tt.Input.Args[0].(uint64))
			assert(t, "GetByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var LinkedAccountingAccountORMGetByIDsTestCase = []TestCase{}

func Test_linkedAccountingAccountORM_GetByIDs(t *testing.T) {
	linkedAccountingAccountORM := newLinkedAccountingAccountORM(db)
	do := linkedAccountingAccountORM.WithContext(context.Background()).Debug()

	for i, tt := range LinkedAccountingAccountORMGetByIDsTestCase {
		t.Run("GetByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByIDs(tt.Input.Args[0].([]uint64))
			assert(t, "GetByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}
