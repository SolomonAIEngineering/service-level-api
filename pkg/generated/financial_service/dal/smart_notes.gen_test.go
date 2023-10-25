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
	err := db.AutoMigrate(&financial_servicev1.SmartNoteORM{})
	if err != nil {
		fmt.Printf("Error: AutoMigrate(&financial_servicev1.SmartNoteORM{}) fail: %s", err)
	}
}

func Test_smartNoteORMQuery(t *testing.T) {
	smartNoteORM := newSmartNoteORM(db)
	smartNoteORM = *smartNoteORM.As(smartNoteORM.TableName())
	_do := smartNoteORM.WithContext(context.Background()).Debug()

	primaryKey := field.NewString(smartNoteORM.TableName(), clause.PrimaryKey)
	_, err := _do.Unscoped().Where(primaryKey.IsNotNull()).Delete()
	if err != nil {
		t.Error("clean table <smart_notes> fail:", err)
		return
	}

	_, ok := smartNoteORM.GetFieldByName("")
	if ok {
		t.Error("GetFieldByName(\"\") from smartNoteORM success")
	}

	err = _do.Create(&financial_servicev1.SmartNoteORM{})
	if err != nil {
		t.Error("create item in table <smart_notes> fail:", err)
	}

	err = _do.Save(&financial_servicev1.SmartNoteORM{})
	if err != nil {
		t.Error("create item in table <smart_notes> fail:", err)
	}

	err = _do.CreateInBatches([]*financial_servicev1.SmartNoteORM{{}, {}}, 10)
	if err != nil {
		t.Error("create item in table <smart_notes> fail:", err)
	}

	_, err = _do.Select(smartNoteORM.ALL).Take()
	if err != nil {
		t.Error("Take() on table <smart_notes> fail:", err)
	}

	_, err = _do.First()
	if err != nil {
		t.Error("First() on table <smart_notes> fail:", err)
	}

	_, err = _do.Last()
	if err != nil {
		t.Error("First() on table <smart_notes> fail:", err)
	}

	_, err = _do.Where(primaryKey.IsNotNull()).FindInBatch(10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatch() on table <smart_notes> fail:", err)
	}

	err = _do.Where(primaryKey.IsNotNull()).FindInBatches(&[]*financial_servicev1.SmartNoteORM{}, 10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatches() on table <smart_notes> fail:", err)
	}

	_, err = _do.Select(smartNoteORM.ALL).Where(primaryKey.IsNotNull()).Order(primaryKey.Desc()).Find()
	if err != nil {
		t.Error("Find() on table <smart_notes> fail:", err)
	}

	_, err = _do.Distinct(primaryKey).Take()
	if err != nil {
		t.Error("select Distinct() on table <smart_notes> fail:", err)
	}

	_, err = _do.Select(smartNoteORM.ALL).Omit(primaryKey).Take()
	if err != nil {
		t.Error("Omit() on table <smart_notes> fail:", err)
	}

	_, err = _do.Group(primaryKey).Find()
	if err != nil {
		t.Error("Group() on table <smart_notes> fail:", err)
	}

	_, err = _do.Scopes(func(dao gen.Dao) gen.Dao { return dao.Where(primaryKey.IsNotNull()) }).Find()
	if err != nil {
		t.Error("Scopes() on table <smart_notes> fail:", err)
	}

	_, _, err = _do.FindByPage(0, 1)
	if err != nil {
		t.Error("FindByPage() on table <smart_notes> fail:", err)
	}

	_, err = _do.ScanByPage(&financial_servicev1.SmartNoteORM{}, 0, 1)
	if err != nil {
		t.Error("ScanByPage() on table <smart_notes> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrInit()
	if err != nil {
		t.Error("FirstOrInit() on table <smart_notes> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrCreate()
	if err != nil {
		t.Error("FirstOrCreate() on table <smart_notes> fail:", err)
	}

	var _a _another
	var _aPK = field.NewString(_a.TableName(), clause.PrimaryKey)

	err = _do.Join(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("Join() on table <smart_notes> fail:", err)
	}

	err = _do.LeftJoin(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("LeftJoin() on table <smart_notes> fail:", err)
	}

	_, err = _do.Not().Or().Clauses().Take()
	if err != nil {
		t.Error("Not/Or/Clauses on table <smart_notes> fail:", err)
	}
}

var SmartNoteORMGetRecordByIDTestCase = []TestCase{}

func Test_smartNoteORM_GetRecordByID(t *testing.T) {
	smartNoteORM := newSmartNoteORM(db)
	do := smartNoteORM.WithContext(context.Background()).Debug()

	for i, tt := range SmartNoteORMGetRecordByIDTestCase {
		t.Run("GetRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByID(tt.Input.Args[0].(int))
			assert(t, "GetRecordByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var SmartNoteORMGetRecordByIDsTestCase = []TestCase{}

func Test_smartNoteORM_GetRecordByIDs(t *testing.T) {
	smartNoteORM := newSmartNoteORM(db)
	do := smartNoteORM.WithContext(context.Background()).Debug()

	for i, tt := range SmartNoteORMGetRecordByIDsTestCase {
		t.Run("GetRecordByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByIDs(tt.Input.Args[0].([]int))
			assert(t, "GetRecordByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}

var SmartNoteORMCreateRecordTestCase = []TestCase{}

func Test_smartNoteORM_CreateRecord(t *testing.T) {
	smartNoteORM := newSmartNoteORM(db)
	do := smartNoteORM.WithContext(context.Background()).Debug()

	for i, tt := range SmartNoteORMCreateRecordTestCase {
		t.Run("CreateRecord_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.CreateRecord(tt.Input.Args[0].(financial_servicev1.SmartNoteORM))
			assert(t, "CreateRecord", res1, tt.Expectation.Ret[0])
		})
	}
}

var SmartNoteORMUpdateRecordByIDTestCase = []TestCase{}

func Test_smartNoteORM_UpdateRecordByID(t *testing.T) {
	smartNoteORM := newSmartNoteORM(db)
	do := smartNoteORM.WithContext(context.Background()).Debug()

	for i, tt := range SmartNoteORMUpdateRecordByIDTestCase {
		t.Run("UpdateRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.UpdateRecordByID(tt.Input.Args[0].(int), tt.Input.Args[1].(financial_servicev1.SmartNoteORM))
			assert(t, "UpdateRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var SmartNoteORMDeleteRecordByIDTestCase = []TestCase{}

func Test_smartNoteORM_DeleteRecordByID(t *testing.T) {
	smartNoteORM := newSmartNoteORM(db)
	do := smartNoteORM.WithContext(context.Background()).Debug()

	for i, tt := range SmartNoteORMDeleteRecordByIDTestCase {
		t.Run("DeleteRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.DeleteRecordByID(tt.Input.Args[0].(int))
			assert(t, "DeleteRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var SmartNoteORMGetAllRecordsTestCase = []TestCase{}

func Test_smartNoteORM_GetAllRecords(t *testing.T) {
	smartNoteORM := newSmartNoteORM(db)
	do := smartNoteORM.WithContext(context.Background()).Debug()

	for i, tt := range SmartNoteORMGetAllRecordsTestCase {
		t.Run("GetAllRecords_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetAllRecords(tt.Input.Args[0].(string), tt.Input.Args[1].(int), tt.Input.Args[2].(int))
			assert(t, "GetAllRecords", res1, tt.Expectation.Ret[0])
			assert(t, "GetAllRecords", res2, tt.Expectation.Ret[1])
		})
	}
}

var SmartNoteORMCountAllTestCase = []TestCase{}

func Test_smartNoteORM_CountAll(t *testing.T) {
	smartNoteORM := newSmartNoteORM(db)
	do := smartNoteORM.WithContext(context.Background()).Debug()

	for i, tt := range SmartNoteORMCountAllTestCase {
		t.Run("CountAll_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.CountAll()
			assert(t, "CountAll", res1, tt.Expectation.Ret[0])
			assert(t, "CountAll", res2, tt.Expectation.Ret[1])
		})
	}
}
