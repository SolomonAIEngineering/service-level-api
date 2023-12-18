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
	err := db.AutoMigrate(&accounting_servicev1.DependentsORM{})
	if err != nil {
		fmt.Printf("Error: AutoMigrate(&accounting_servicev1.DependentsORM{}) fail: %s", err)
	}
}

func Test_dependentsORMQuery(t *testing.T) {
	dependentsORM := newDependentsORM(db)
	dependentsORM = *dependentsORM.As(dependentsORM.TableName())
	_do := dependentsORM.WithContext(context.Background()).Debug()

	primaryKey := field.NewString(dependentsORM.TableName(), clause.PrimaryKey)
	_, err := _do.Unscoped().Where(primaryKey.IsNotNull()).Delete()
	if err != nil {
		t.Error("clean table <dependents> fail:", err)
		return
	}

	_, ok := dependentsORM.GetFieldByName("")
	if ok {
		t.Error("GetFieldByName(\"\") from dependentsORM success")
	}

	err = _do.Create(&accounting_servicev1.DependentsORM{})
	if err != nil {
		t.Error("create item in table <dependents> fail:", err)
	}

	err = _do.Save(&accounting_servicev1.DependentsORM{})
	if err != nil {
		t.Error("create item in table <dependents> fail:", err)
	}

	err = _do.CreateInBatches([]*accounting_servicev1.DependentsORM{{}, {}}, 10)
	if err != nil {
		t.Error("create item in table <dependents> fail:", err)
	}

	_, err = _do.Select(dependentsORM.ALL).Take()
	if err != nil {
		t.Error("Take() on table <dependents> fail:", err)
	}

	_, err = _do.First()
	if err != nil {
		t.Error("First() on table <dependents> fail:", err)
	}

	_, err = _do.Last()
	if err != nil {
		t.Error("First() on table <dependents> fail:", err)
	}

	_, err = _do.Where(primaryKey.IsNotNull()).FindInBatch(10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatch() on table <dependents> fail:", err)
	}

	err = _do.Where(primaryKey.IsNotNull()).FindInBatches(&[]*accounting_servicev1.DependentsORM{}, 10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatches() on table <dependents> fail:", err)
	}

	_, err = _do.Select(dependentsORM.ALL).Where(primaryKey.IsNotNull()).Order(primaryKey.Desc()).Find()
	if err != nil {
		t.Error("Find() on table <dependents> fail:", err)
	}

	_, err = _do.Distinct(primaryKey).Take()
	if err != nil {
		t.Error("select Distinct() on table <dependents> fail:", err)
	}

	_, err = _do.Select(dependentsORM.ALL).Omit(primaryKey).Take()
	if err != nil {
		t.Error("Omit() on table <dependents> fail:", err)
	}

	_, err = _do.Group(primaryKey).Find()
	if err != nil {
		t.Error("Group() on table <dependents> fail:", err)
	}

	_, err = _do.Scopes(func(dao gen.Dao) gen.Dao { return dao.Where(primaryKey.IsNotNull()) }).Find()
	if err != nil {
		t.Error("Scopes() on table <dependents> fail:", err)
	}

	_, _, err = _do.FindByPage(0, 1)
	if err != nil {
		t.Error("FindByPage() on table <dependents> fail:", err)
	}

	_, err = _do.ScanByPage(&accounting_servicev1.DependentsORM{}, 0, 1)
	if err != nil {
		t.Error("ScanByPage() on table <dependents> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrInit()
	if err != nil {
		t.Error("FirstOrInit() on table <dependents> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrCreate()
	if err != nil {
		t.Error("FirstOrCreate() on table <dependents> fail:", err)
	}

	var _a _another
	var _aPK = field.NewString(_a.TableName(), clause.PrimaryKey)

	err = _do.Join(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("Join() on table <dependents> fail:", err)
	}

	err = _do.LeftJoin(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("LeftJoin() on table <dependents> fail:", err)
	}

	_, err = _do.Not().Or().Clauses().Take()
	if err != nil {
		t.Error("Not/Or/Clauses on table <dependents> fail:", err)
	}
}

var DependentsORMGetRecordByIDTestCase = []TestCase{}

func Test_dependentsORM_GetRecordByID(t *testing.T) {
	dependentsORM := newDependentsORM(db)
	do := dependentsORM.WithContext(context.Background()).Debug()

	for i, tt := range DependentsORMGetRecordByIDTestCase {
		t.Run("GetRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByID(tt.Input.Args[0].(int))
			assert(t, "GetRecordByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var DependentsORMGetRecordByIDsTestCase = []TestCase{}

func Test_dependentsORM_GetRecordByIDs(t *testing.T) {
	dependentsORM := newDependentsORM(db)
	do := dependentsORM.WithContext(context.Background()).Debug()

	for i, tt := range DependentsORMGetRecordByIDsTestCase {
		t.Run("GetRecordByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByIDs(tt.Input.Args[0].([]int))
			assert(t, "GetRecordByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}

var DependentsORMCreateRecordTestCase = []TestCase{}

func Test_dependentsORM_CreateRecord(t *testing.T) {
	dependentsORM := newDependentsORM(db)
	do := dependentsORM.WithContext(context.Background()).Debug()

	for i, tt := range DependentsORMCreateRecordTestCase {
		t.Run("CreateRecord_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.CreateRecord(tt.Input.Args[0].(accounting_servicev1.DependentsORM))
			assert(t, "CreateRecord", res1, tt.Expectation.Ret[0])
		})
	}
}

var DependentsORMUpdateRecordByIDTestCase = []TestCase{}

func Test_dependentsORM_UpdateRecordByID(t *testing.T) {
	dependentsORM := newDependentsORM(db)
	do := dependentsORM.WithContext(context.Background()).Debug()

	for i, tt := range DependentsORMUpdateRecordByIDTestCase {
		t.Run("UpdateRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.UpdateRecordByID(tt.Input.Args[0].(int), tt.Input.Args[1].(accounting_servicev1.DependentsORM))
			assert(t, "UpdateRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var DependentsORMDeleteRecordByIDTestCase = []TestCase{}

func Test_dependentsORM_DeleteRecordByID(t *testing.T) {
	dependentsORM := newDependentsORM(db)
	do := dependentsORM.WithContext(context.Background()).Debug()

	for i, tt := range DependentsORMDeleteRecordByIDTestCase {
		t.Run("DeleteRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.DeleteRecordByID(tt.Input.Args[0].(int))
			assert(t, "DeleteRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var DependentsORMGetAllRecordsTestCase = []TestCase{}

func Test_dependentsORM_GetAllRecords(t *testing.T) {
	dependentsORM := newDependentsORM(db)
	do := dependentsORM.WithContext(context.Background()).Debug()

	for i, tt := range DependentsORMGetAllRecordsTestCase {
		t.Run("GetAllRecords_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetAllRecords(tt.Input.Args[0].(string), tt.Input.Args[1].(int), tt.Input.Args[2].(int))
			assert(t, "GetAllRecords", res1, tt.Expectation.Ret[0])
			assert(t, "GetAllRecords", res2, tt.Expectation.Ret[1])
		})
	}
}

var DependentsORMCountAllTestCase = []TestCase{}

func Test_dependentsORM_CountAll(t *testing.T) {
	dependentsORM := newDependentsORM(db)
	do := dependentsORM.WithContext(context.Background()).Debug()

	for i, tt := range DependentsORMCountAllTestCase {
		t.Run("CountAll_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.CountAll()
			assert(t, "CountAll", res1, tt.Expectation.Ret[0])
			assert(t, "CountAll", res2, tt.Expectation.Ret[1])
		})
	}
}

var DependentsORMGetByIDTestCase = []TestCase{}

func Test_dependentsORM_GetByID(t *testing.T) {
	dependentsORM := newDependentsORM(db)
	do := dependentsORM.WithContext(context.Background()).Debug()

	for i, tt := range DependentsORMGetByIDTestCase {
		t.Run("GetByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByID(tt.Input.Args[0].(uint64))
			assert(t, "GetByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var DependentsORMGetByIDsTestCase = []TestCase{}

func Test_dependentsORM_GetByIDs(t *testing.T) {
	dependentsORM := newDependentsORM(db)
	do := dependentsORM.WithContext(context.Background()).Debug()

	for i, tt := range DependentsORMGetByIDsTestCase {
		t.Run("GetByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByIDs(tt.Input.Args[0].([]uint64))
			assert(t, "GetByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}
