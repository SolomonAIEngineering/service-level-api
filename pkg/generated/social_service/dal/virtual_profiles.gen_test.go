// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"
	"fmt"
	"strconv"
	"testing"

	social_servicev2 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/social_service/v2"
	"gorm.io/gen"
	"gorm.io/gen/field"
	"gorm.io/gorm/clause"
)

func init() {
	InitializeDB()
	err := db.AutoMigrate(&social_servicev2.VirtualProfileORM{})
	if err != nil {
		fmt.Printf("Error: AutoMigrate(&social_servicev2.VirtualProfileORM{}) fail: %s", err)
	}
}

func Test_virtualProfileORMQuery(t *testing.T) {
	virtualProfileORM := newVirtualProfileORM(db)
	virtualProfileORM = *virtualProfileORM.As(virtualProfileORM.TableName())
	_do := virtualProfileORM.WithContext(context.Background()).Debug()

	primaryKey := field.NewString(virtualProfileORM.TableName(), clause.PrimaryKey)
	_, err := _do.Unscoped().Where(primaryKey.IsNotNull()).Delete()
	if err != nil {
		t.Error("clean table <virtual_profiles> fail:", err)
		return
	}

	_, ok := virtualProfileORM.GetFieldByName("")
	if ok {
		t.Error("GetFieldByName(\"\") from virtualProfileORM success")
	}

	err = _do.Create(&social_servicev2.VirtualProfileORM{})
	if err != nil {
		t.Error("create item in table <virtual_profiles> fail:", err)
	}

	err = _do.Save(&social_servicev2.VirtualProfileORM{})
	if err != nil {
		t.Error("create item in table <virtual_profiles> fail:", err)
	}

	err = _do.CreateInBatches([]*social_servicev2.VirtualProfileORM{{}, {}}, 10)
	if err != nil {
		t.Error("create item in table <virtual_profiles> fail:", err)
	}

	_, err = _do.Select(virtualProfileORM.ALL).Take()
	if err != nil {
		t.Error("Take() on table <virtual_profiles> fail:", err)
	}

	_, err = _do.First()
	if err != nil {
		t.Error("First() on table <virtual_profiles> fail:", err)
	}

	_, err = _do.Last()
	if err != nil {
		t.Error("First() on table <virtual_profiles> fail:", err)
	}

	_, err = _do.Where(primaryKey.IsNotNull()).FindInBatch(10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatch() on table <virtual_profiles> fail:", err)
	}

	err = _do.Where(primaryKey.IsNotNull()).FindInBatches(&[]*social_servicev2.VirtualProfileORM{}, 10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatches() on table <virtual_profiles> fail:", err)
	}

	_, err = _do.Select(virtualProfileORM.ALL).Where(primaryKey.IsNotNull()).Order(primaryKey.Desc()).Find()
	if err != nil {
		t.Error("Find() on table <virtual_profiles> fail:", err)
	}

	_, err = _do.Distinct(primaryKey).Take()
	if err != nil {
		t.Error("select Distinct() on table <virtual_profiles> fail:", err)
	}

	_, err = _do.Select(virtualProfileORM.ALL).Omit(primaryKey).Take()
	if err != nil {
		t.Error("Omit() on table <virtual_profiles> fail:", err)
	}

	_, err = _do.Group(primaryKey).Find()
	if err != nil {
		t.Error("Group() on table <virtual_profiles> fail:", err)
	}

	_, err = _do.Scopes(func(dao gen.Dao) gen.Dao { return dao.Where(primaryKey.IsNotNull()) }).Find()
	if err != nil {
		t.Error("Scopes() on table <virtual_profiles> fail:", err)
	}

	_, _, err = _do.FindByPage(0, 1)
	if err != nil {
		t.Error("FindByPage() on table <virtual_profiles> fail:", err)
	}

	_, err = _do.ScanByPage(&social_servicev2.VirtualProfileORM{}, 0, 1)
	if err != nil {
		t.Error("ScanByPage() on table <virtual_profiles> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrInit()
	if err != nil {
		t.Error("FirstOrInit() on table <virtual_profiles> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrCreate()
	if err != nil {
		t.Error("FirstOrCreate() on table <virtual_profiles> fail:", err)
	}

	var _a _another
	var _aPK = field.NewString(_a.TableName(), clause.PrimaryKey)

	err = _do.Join(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("Join() on table <virtual_profiles> fail:", err)
	}

	err = _do.LeftJoin(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("LeftJoin() on table <virtual_profiles> fail:", err)
	}

	_, err = _do.Not().Or().Clauses().Take()
	if err != nil {
		t.Error("Not/Or/Clauses on table <virtual_profiles> fail:", err)
	}
}

var VirtualProfileORMGetRecordByIDTestCase = []TestCase{}

func Test_virtualProfileORM_GetRecordByID(t *testing.T) {
	virtualProfileORM := newVirtualProfileORM(db)
	do := virtualProfileORM.WithContext(context.Background()).Debug()

	for i, tt := range VirtualProfileORMGetRecordByIDTestCase {
		t.Run("GetRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByID(tt.Input.Args[0].(int))
			assert(t, "GetRecordByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var VirtualProfileORMGetRecordByIDsTestCase = []TestCase{}

func Test_virtualProfileORM_GetRecordByIDs(t *testing.T) {
	virtualProfileORM := newVirtualProfileORM(db)
	do := virtualProfileORM.WithContext(context.Background()).Debug()

	for i, tt := range VirtualProfileORMGetRecordByIDsTestCase {
		t.Run("GetRecordByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByIDs(tt.Input.Args[0].([]int))
			assert(t, "GetRecordByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}

var VirtualProfileORMCreateRecordTestCase = []TestCase{}

func Test_virtualProfileORM_CreateRecord(t *testing.T) {
	virtualProfileORM := newVirtualProfileORM(db)
	do := virtualProfileORM.WithContext(context.Background()).Debug()

	for i, tt := range VirtualProfileORMCreateRecordTestCase {
		t.Run("CreateRecord_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.CreateRecord(tt.Input.Args[0].(social_servicev2.VirtualProfileORM))
			assert(t, "CreateRecord", res1, tt.Expectation.Ret[0])
		})
	}
}

var VirtualProfileORMUpdateRecordByIDTestCase = []TestCase{}

func Test_virtualProfileORM_UpdateRecordByID(t *testing.T) {
	virtualProfileORM := newVirtualProfileORM(db)
	do := virtualProfileORM.WithContext(context.Background()).Debug()

	for i, tt := range VirtualProfileORMUpdateRecordByIDTestCase {
		t.Run("UpdateRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.UpdateRecordByID(tt.Input.Args[0].(int), tt.Input.Args[1].(social_servicev2.VirtualProfileORM))
			assert(t, "UpdateRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var VirtualProfileORMDeleteRecordByIDTestCase = []TestCase{}

func Test_virtualProfileORM_DeleteRecordByID(t *testing.T) {
	virtualProfileORM := newVirtualProfileORM(db)
	do := virtualProfileORM.WithContext(context.Background()).Debug()

	for i, tt := range VirtualProfileORMDeleteRecordByIDTestCase {
		t.Run("DeleteRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.DeleteRecordByID(tt.Input.Args[0].(int))
			assert(t, "DeleteRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var VirtualProfileORMGetAllRecordsTestCase = []TestCase{}

func Test_virtualProfileORM_GetAllRecords(t *testing.T) {
	virtualProfileORM := newVirtualProfileORM(db)
	do := virtualProfileORM.WithContext(context.Background()).Debug()

	for i, tt := range VirtualProfileORMGetAllRecordsTestCase {
		t.Run("GetAllRecords_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetAllRecords(tt.Input.Args[0].(string), tt.Input.Args[1].(int), tt.Input.Args[2].(int))
			assert(t, "GetAllRecords", res1, tt.Expectation.Ret[0])
			assert(t, "GetAllRecords", res2, tt.Expectation.Ret[1])
		})
	}
}

var VirtualProfileORMCountAllTestCase = []TestCase{}

func Test_virtualProfileORM_CountAll(t *testing.T) {
	virtualProfileORM := newVirtualProfileORM(db)
	do := virtualProfileORM.WithContext(context.Background()).Debug()

	for i, tt := range VirtualProfileORMCountAllTestCase {
		t.Run("CountAll_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.CountAll()
			assert(t, "CountAll", res1, tt.Expectation.Ret[0])
			assert(t, "CountAll", res2, tt.Expectation.Ret[1])
		})
	}
}