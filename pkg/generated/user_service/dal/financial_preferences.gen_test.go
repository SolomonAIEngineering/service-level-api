// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"
	"fmt"
	"strconv"
	"testing"

	user_servicev1 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/user_service/v1"
	"gorm.io/gen"
	"gorm.io/gen/field"
	"gorm.io/gorm/clause"
)

func init() {
	InitializeDB()
	err := db.AutoMigrate(&user_servicev1.FinancialPreferencesORM{})
	if err != nil {
		fmt.Printf("Error: AutoMigrate(&user_servicev1.FinancialPreferencesORM{}) fail: %s", err)
	}
}

func Test_financialPreferencesORMQuery(t *testing.T) {
	financialPreferencesORM := newFinancialPreferencesORM(db)
	financialPreferencesORM = *financialPreferencesORM.As(financialPreferencesORM.TableName())
	_do := financialPreferencesORM.WithContext(context.Background()).Debug()

	primaryKey := field.NewString(financialPreferencesORM.TableName(), clause.PrimaryKey)
	_, err := _do.Unscoped().Where(primaryKey.IsNotNull()).Delete()
	if err != nil {
		t.Error("clean table <financial_preferences> fail:", err)
		return
	}

	_, ok := financialPreferencesORM.GetFieldByName("")
	if ok {
		t.Error("GetFieldByName(\"\") from financialPreferencesORM success")
	}

	err = _do.Create(&user_servicev1.FinancialPreferencesORM{})
	if err != nil {
		t.Error("create item in table <financial_preferences> fail:", err)
	}

	err = _do.Save(&user_servicev1.FinancialPreferencesORM{})
	if err != nil {
		t.Error("create item in table <financial_preferences> fail:", err)
	}

	err = _do.CreateInBatches([]*user_servicev1.FinancialPreferencesORM{{}, {}}, 10)
	if err != nil {
		t.Error("create item in table <financial_preferences> fail:", err)
	}

	_, err = _do.Select(financialPreferencesORM.ALL).Take()
	if err != nil {
		t.Error("Take() on table <financial_preferences> fail:", err)
	}

	_, err = _do.First()
	if err != nil {
		t.Error("First() on table <financial_preferences> fail:", err)
	}

	_, err = _do.Last()
	if err != nil {
		t.Error("First() on table <financial_preferences> fail:", err)
	}

	_, err = _do.Where(primaryKey.IsNotNull()).FindInBatch(10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatch() on table <financial_preferences> fail:", err)
	}

	err = _do.Where(primaryKey.IsNotNull()).FindInBatches(&[]*user_servicev1.FinancialPreferencesORM{}, 10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatches() on table <financial_preferences> fail:", err)
	}

	_, err = _do.Select(financialPreferencesORM.ALL).Where(primaryKey.IsNotNull()).Order(primaryKey.Desc()).Find()
	if err != nil {
		t.Error("Find() on table <financial_preferences> fail:", err)
	}

	_, err = _do.Distinct(primaryKey).Take()
	if err != nil {
		t.Error("select Distinct() on table <financial_preferences> fail:", err)
	}

	_, err = _do.Select(financialPreferencesORM.ALL).Omit(primaryKey).Take()
	if err != nil {
		t.Error("Omit() on table <financial_preferences> fail:", err)
	}

	_, err = _do.Group(primaryKey).Find()
	if err != nil {
		t.Error("Group() on table <financial_preferences> fail:", err)
	}

	_, err = _do.Scopes(func(dao gen.Dao) gen.Dao { return dao.Where(primaryKey.IsNotNull()) }).Find()
	if err != nil {
		t.Error("Scopes() on table <financial_preferences> fail:", err)
	}

	_, _, err = _do.FindByPage(0, 1)
	if err != nil {
		t.Error("FindByPage() on table <financial_preferences> fail:", err)
	}

	_, err = _do.ScanByPage(&user_servicev1.FinancialPreferencesORM{}, 0, 1)
	if err != nil {
		t.Error("ScanByPage() on table <financial_preferences> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrInit()
	if err != nil {
		t.Error("FirstOrInit() on table <financial_preferences> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrCreate()
	if err != nil {
		t.Error("FirstOrCreate() on table <financial_preferences> fail:", err)
	}

	var _a _another
	var _aPK = field.NewString(_a.TableName(), clause.PrimaryKey)

	err = _do.Join(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("Join() on table <financial_preferences> fail:", err)
	}

	err = _do.LeftJoin(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("LeftJoin() on table <financial_preferences> fail:", err)
	}

	_, err = _do.Not().Or().Clauses().Take()
	if err != nil {
		t.Error("Not/Or/Clauses on table <financial_preferences> fail:", err)
	}
}

var FinancialPreferencesORMGetRecordByIDTestCase = []TestCase{}

func Test_financialPreferencesORM_GetRecordByID(t *testing.T) {
	financialPreferencesORM := newFinancialPreferencesORM(db)
	do := financialPreferencesORM.WithContext(context.Background()).Debug()

	for i, tt := range FinancialPreferencesORMGetRecordByIDTestCase {
		t.Run("GetRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByID(tt.Input.Args[0].(int))
			assert(t, "GetRecordByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var FinancialPreferencesORMGetRecordByIDsTestCase = []TestCase{}

func Test_financialPreferencesORM_GetRecordByIDs(t *testing.T) {
	financialPreferencesORM := newFinancialPreferencesORM(db)
	do := financialPreferencesORM.WithContext(context.Background()).Debug()

	for i, tt := range FinancialPreferencesORMGetRecordByIDsTestCase {
		t.Run("GetRecordByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByIDs(tt.Input.Args[0].([]int))
			assert(t, "GetRecordByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}

var FinancialPreferencesORMCreateRecordTestCase = []TestCase{}

func Test_financialPreferencesORM_CreateRecord(t *testing.T) {
	financialPreferencesORM := newFinancialPreferencesORM(db)
	do := financialPreferencesORM.WithContext(context.Background()).Debug()

	for i, tt := range FinancialPreferencesORMCreateRecordTestCase {
		t.Run("CreateRecord_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.CreateRecord(tt.Input.Args[0].(user_servicev1.FinancialPreferencesORM))
			assert(t, "CreateRecord", res1, tt.Expectation.Ret[0])
		})
	}
}

var FinancialPreferencesORMUpdateRecordByIDTestCase = []TestCase{}

func Test_financialPreferencesORM_UpdateRecordByID(t *testing.T) {
	financialPreferencesORM := newFinancialPreferencesORM(db)
	do := financialPreferencesORM.WithContext(context.Background()).Debug()

	for i, tt := range FinancialPreferencesORMUpdateRecordByIDTestCase {
		t.Run("UpdateRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.UpdateRecordByID(tt.Input.Args[0].(int), tt.Input.Args[1].(user_servicev1.FinancialPreferencesORM))
			assert(t, "UpdateRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var FinancialPreferencesORMDeleteRecordByIDTestCase = []TestCase{}

func Test_financialPreferencesORM_DeleteRecordByID(t *testing.T) {
	financialPreferencesORM := newFinancialPreferencesORM(db)
	do := financialPreferencesORM.WithContext(context.Background()).Debug()

	for i, tt := range FinancialPreferencesORMDeleteRecordByIDTestCase {
		t.Run("DeleteRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.DeleteRecordByID(tt.Input.Args[0].(int))
			assert(t, "DeleteRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var FinancialPreferencesORMGetAllRecordsTestCase = []TestCase{}

func Test_financialPreferencesORM_GetAllRecords(t *testing.T) {
	financialPreferencesORM := newFinancialPreferencesORM(db)
	do := financialPreferencesORM.WithContext(context.Background()).Debug()

	for i, tt := range FinancialPreferencesORMGetAllRecordsTestCase {
		t.Run("GetAllRecords_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetAllRecords(tt.Input.Args[0].(string), tt.Input.Args[1].(int), tt.Input.Args[2].(int))
			assert(t, "GetAllRecords", res1, tt.Expectation.Ret[0])
			assert(t, "GetAllRecords", res2, tt.Expectation.Ret[1])
		})
	}
}

var FinancialPreferencesORMCountAllTestCase = []TestCase{}

func Test_financialPreferencesORM_CountAll(t *testing.T) {
	financialPreferencesORM := newFinancialPreferencesORM(db)
	do := financialPreferencesORM.WithContext(context.Background()).Debug()

	for i, tt := range FinancialPreferencesORMCountAllTestCase {
		t.Run("CountAll_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.CountAll()
			assert(t, "CountAll", res1, tt.Expectation.Ret[0])
			assert(t, "CountAll", res2, tt.Expectation.Ret[1])
		})
	}
}

var FinancialPreferencesORMGetByIDTestCase = []TestCase{}

func Test_financialPreferencesORM_GetByID(t *testing.T) {
	financialPreferencesORM := newFinancialPreferencesORM(db)
	do := financialPreferencesORM.WithContext(context.Background()).Debug()

	for i, tt := range FinancialPreferencesORMGetByIDTestCase {
		t.Run("GetByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByID(tt.Input.Args[0].(uint64))
			assert(t, "GetByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var FinancialPreferencesORMGetByIDsTestCase = []TestCase{}

func Test_financialPreferencesORM_GetByIDs(t *testing.T) {
	financialPreferencesORM := newFinancialPreferencesORM(db)
	do := financialPreferencesORM.WithContext(context.Background()).Debug()

	for i, tt := range FinancialPreferencesORMGetByIDsTestCase {
		t.Run("GetByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByIDs(tt.Input.Args[0].([]uint64))
			assert(t, "GetByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}
