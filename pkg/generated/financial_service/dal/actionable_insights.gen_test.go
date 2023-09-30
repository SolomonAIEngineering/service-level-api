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
	err := db.AutoMigrate(&financial_servicev1.ActionableInsightORM{})
	if err != nil {
		fmt.Printf("Error: AutoMigrate(&financial_servicev1.ActionableInsightORM{}) fail: %s", err)
	}
}

func Test_actionableInsightORMQuery(t *testing.T) {
	actionableInsightORM := newActionableInsightORM(db)
	actionableInsightORM = *actionableInsightORM.As(actionableInsightORM.TableName())
	_do := actionableInsightORM.WithContext(context.Background()).Debug()

	primaryKey := field.NewString(actionableInsightORM.TableName(), clause.PrimaryKey)
	_, err := _do.Unscoped().Where(primaryKey.IsNotNull()).Delete()
	if err != nil {
		t.Error("clean table <actionable_insights> fail:", err)
		return
	}

	_, ok := actionableInsightORM.GetFieldByName("")
	if ok {
		t.Error("GetFieldByName(\"\") from actionableInsightORM success")
	}

	err = _do.Create(&financial_servicev1.ActionableInsightORM{})
	if err != nil {
		t.Error("create item in table <actionable_insights> fail:", err)
	}

	err = _do.Save(&financial_servicev1.ActionableInsightORM{})
	if err != nil {
		t.Error("create item in table <actionable_insights> fail:", err)
	}

	err = _do.CreateInBatches([]*financial_servicev1.ActionableInsightORM{{}, {}}, 10)
	if err != nil {
		t.Error("create item in table <actionable_insights> fail:", err)
	}

	_, err = _do.Select(actionableInsightORM.ALL).Take()
	if err != nil {
		t.Error("Take() on table <actionable_insights> fail:", err)
	}

	_, err = _do.First()
	if err != nil {
		t.Error("First() on table <actionable_insights> fail:", err)
	}

	_, err = _do.Last()
	if err != nil {
		t.Error("First() on table <actionable_insights> fail:", err)
	}

	_, err = _do.Where(primaryKey.IsNotNull()).FindInBatch(10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatch() on table <actionable_insights> fail:", err)
	}

	err = _do.Where(primaryKey.IsNotNull()).FindInBatches(&[]*financial_servicev1.ActionableInsightORM{}, 10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatches() on table <actionable_insights> fail:", err)
	}

	_, err = _do.Select(actionableInsightORM.ALL).Where(primaryKey.IsNotNull()).Order(primaryKey.Desc()).Find()
	if err != nil {
		t.Error("Find() on table <actionable_insights> fail:", err)
	}

	_, err = _do.Distinct(primaryKey).Take()
	if err != nil {
		t.Error("select Distinct() on table <actionable_insights> fail:", err)
	}

	_, err = _do.Select(actionableInsightORM.ALL).Omit(primaryKey).Take()
	if err != nil {
		t.Error("Omit() on table <actionable_insights> fail:", err)
	}

	_, err = _do.Group(primaryKey).Find()
	if err != nil {
		t.Error("Group() on table <actionable_insights> fail:", err)
	}

	_, err = _do.Scopes(func(dao gen.Dao) gen.Dao { return dao.Where(primaryKey.IsNotNull()) }).Find()
	if err != nil {
		t.Error("Scopes() on table <actionable_insights> fail:", err)
	}

	_, _, err = _do.FindByPage(0, 1)
	if err != nil {
		t.Error("FindByPage() on table <actionable_insights> fail:", err)
	}

	_, err = _do.ScanByPage(&financial_servicev1.ActionableInsightORM{}, 0, 1)
	if err != nil {
		t.Error("ScanByPage() on table <actionable_insights> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrInit()
	if err != nil {
		t.Error("FirstOrInit() on table <actionable_insights> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrCreate()
	if err != nil {
		t.Error("FirstOrCreate() on table <actionable_insights> fail:", err)
	}

	var _a _another
	var _aPK = field.NewString(_a.TableName(), clause.PrimaryKey)

	err = _do.Join(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("Join() on table <actionable_insights> fail:", err)
	}

	err = _do.LeftJoin(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("LeftJoin() on table <actionable_insights> fail:", err)
	}

	_, err = _do.Not().Or().Clauses().Take()
	if err != nil {
		t.Error("Not/Or/Clauses on table <actionable_insights> fail:", err)
	}
}

var ActionableInsightORMGetRecordByIDTestCase = []TestCase{}

func Test_actionableInsightORM_GetRecordByID(t *testing.T) {
	actionableInsightORM := newActionableInsightORM(db)
	do := actionableInsightORM.WithContext(context.Background()).Debug()

	for i, tt := range ActionableInsightORMGetRecordByIDTestCase {
		t.Run("GetRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByID(tt.Input.Args[0].(int))
			assert(t, "GetRecordByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var ActionableInsightORMGetRecordByIDsTestCase = []TestCase{}

func Test_actionableInsightORM_GetRecordByIDs(t *testing.T) {
	actionableInsightORM := newActionableInsightORM(db)
	do := actionableInsightORM.WithContext(context.Background()).Debug()

	for i, tt := range ActionableInsightORMGetRecordByIDsTestCase {
		t.Run("GetRecordByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByIDs(tt.Input.Args[0].([]int))
			assert(t, "GetRecordByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}

var ActionableInsightORMCreateRecordTestCase = []TestCase{}

func Test_actionableInsightORM_CreateRecord(t *testing.T) {
	actionableInsightORM := newActionableInsightORM(db)
	do := actionableInsightORM.WithContext(context.Background()).Debug()

	for i, tt := range ActionableInsightORMCreateRecordTestCase {
		t.Run("CreateRecord_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.CreateRecord(tt.Input.Args[0].(financial_servicev1.ActionableInsightORM))
			assert(t, "CreateRecord", res1, tt.Expectation.Ret[0])
		})
	}
}

var ActionableInsightORMUpdateRecordByIDTestCase = []TestCase{}

func Test_actionableInsightORM_UpdateRecordByID(t *testing.T) {
	actionableInsightORM := newActionableInsightORM(db)
	do := actionableInsightORM.WithContext(context.Background()).Debug()

	for i, tt := range ActionableInsightORMUpdateRecordByIDTestCase {
		t.Run("UpdateRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.UpdateRecordByID(tt.Input.Args[0].(int), tt.Input.Args[1].(financial_servicev1.ActionableInsightORM))
			assert(t, "UpdateRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var ActionableInsightORMDeleteRecordByIDTestCase = []TestCase{}

func Test_actionableInsightORM_DeleteRecordByID(t *testing.T) {
	actionableInsightORM := newActionableInsightORM(db)
	do := actionableInsightORM.WithContext(context.Background()).Debug()

	for i, tt := range ActionableInsightORMDeleteRecordByIDTestCase {
		t.Run("DeleteRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.DeleteRecordByID(tt.Input.Args[0].(int))
			assert(t, "DeleteRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var ActionableInsightORMGetAllRecordsTestCase = []TestCase{}

func Test_actionableInsightORM_GetAllRecords(t *testing.T) {
	actionableInsightORM := newActionableInsightORM(db)
	do := actionableInsightORM.WithContext(context.Background()).Debug()

	for i, tt := range ActionableInsightORMGetAllRecordsTestCase {
		t.Run("GetAllRecords_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetAllRecords(tt.Input.Args[0].(string), tt.Input.Args[1].(int), tt.Input.Args[2].(int))
			assert(t, "GetAllRecords", res1, tt.Expectation.Ret[0])
			assert(t, "GetAllRecords", res2, tt.Expectation.Ret[1])
		})
	}
}

var ActionableInsightORMCountAllTestCase = []TestCase{}

func Test_actionableInsightORM_CountAll(t *testing.T) {
	actionableInsightORM := newActionableInsightORM(db)
	do := actionableInsightORM.WithContext(context.Background()).Debug()

	for i, tt := range ActionableInsightORMCountAllTestCase {
		t.Run("CountAll_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.CountAll()
			assert(t, "CountAll", res1, tt.Expectation.Ret[0])
			assert(t, "CountAll", res2, tt.Expectation.Ret[1])
		})
	}
}
