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
	err := db.AutoMigrate(&financial_servicev1.TrackingCategoryORM{})
	if err != nil {
		fmt.Printf("Error: AutoMigrate(&financial_servicev1.TrackingCategoryORM{}) fail: %s", err)
	}
}

func Test_trackingCategoryORMQuery(t *testing.T) {
	trackingCategoryORM := newTrackingCategoryORM(db)
	trackingCategoryORM = *trackingCategoryORM.As(trackingCategoryORM.TableName())
	_do := trackingCategoryORM.WithContext(context.Background()).Debug()

	primaryKey := field.NewString(trackingCategoryORM.TableName(), clause.PrimaryKey)
	_, err := _do.Unscoped().Where(primaryKey.IsNotNull()).Delete()
	if err != nil {
		t.Error("clean table <tracking_categories> fail:", err)
		return
	}

	_, ok := trackingCategoryORM.GetFieldByName("")
	if ok {
		t.Error("GetFieldByName(\"\") from trackingCategoryORM success")
	}

	err = _do.Create(&financial_servicev1.TrackingCategoryORM{})
	if err != nil {
		t.Error("create item in table <tracking_categories> fail:", err)
	}

	err = _do.Save(&financial_servicev1.TrackingCategoryORM{})
	if err != nil {
		t.Error("create item in table <tracking_categories> fail:", err)
	}

	err = _do.CreateInBatches([]*financial_servicev1.TrackingCategoryORM{{}, {}}, 10)
	if err != nil {
		t.Error("create item in table <tracking_categories> fail:", err)
	}

	_, err = _do.Select(trackingCategoryORM.ALL).Take()
	if err != nil {
		t.Error("Take() on table <tracking_categories> fail:", err)
	}

	_, err = _do.First()
	if err != nil {
		t.Error("First() on table <tracking_categories> fail:", err)
	}

	_, err = _do.Last()
	if err != nil {
		t.Error("First() on table <tracking_categories> fail:", err)
	}

	_, err = _do.Where(primaryKey.IsNotNull()).FindInBatch(10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatch() on table <tracking_categories> fail:", err)
	}

	err = _do.Where(primaryKey.IsNotNull()).FindInBatches(&[]*financial_servicev1.TrackingCategoryORM{}, 10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatches() on table <tracking_categories> fail:", err)
	}

	_, err = _do.Select(trackingCategoryORM.ALL).Where(primaryKey.IsNotNull()).Order(primaryKey.Desc()).Find()
	if err != nil {
		t.Error("Find() on table <tracking_categories> fail:", err)
	}

	_, err = _do.Distinct(primaryKey).Take()
	if err != nil {
		t.Error("select Distinct() on table <tracking_categories> fail:", err)
	}

	_, err = _do.Select(trackingCategoryORM.ALL).Omit(primaryKey).Take()
	if err != nil {
		t.Error("Omit() on table <tracking_categories> fail:", err)
	}

	_, err = _do.Group(primaryKey).Find()
	if err != nil {
		t.Error("Group() on table <tracking_categories> fail:", err)
	}

	_, err = _do.Scopes(func(dao gen.Dao) gen.Dao { return dao.Where(primaryKey.IsNotNull()) }).Find()
	if err != nil {
		t.Error("Scopes() on table <tracking_categories> fail:", err)
	}

	_, _, err = _do.FindByPage(0, 1)
	if err != nil {
		t.Error("FindByPage() on table <tracking_categories> fail:", err)
	}

	_, err = _do.ScanByPage(&financial_servicev1.TrackingCategoryORM{}, 0, 1)
	if err != nil {
		t.Error("ScanByPage() on table <tracking_categories> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrInit()
	if err != nil {
		t.Error("FirstOrInit() on table <tracking_categories> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrCreate()
	if err != nil {
		t.Error("FirstOrCreate() on table <tracking_categories> fail:", err)
	}

	var _a _another
	var _aPK = field.NewString(_a.TableName(), clause.PrimaryKey)

	err = _do.Join(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("Join() on table <tracking_categories> fail:", err)
	}

	err = _do.LeftJoin(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("LeftJoin() on table <tracking_categories> fail:", err)
	}

	_, err = _do.Not().Or().Clauses().Take()
	if err != nil {
		t.Error("Not/Or/Clauses on table <tracking_categories> fail:", err)
	}
}

var TrackingCategoryORMGetRecordByIDTestCase = []TestCase{}

func Test_trackingCategoryORM_GetRecordByID(t *testing.T) {
	trackingCategoryORM := newTrackingCategoryORM(db)
	do := trackingCategoryORM.WithContext(context.Background()).Debug()

	for i, tt := range TrackingCategoryORMGetRecordByIDTestCase {
		t.Run("GetRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByID(tt.Input.Args[0].(int))
			assert(t, "GetRecordByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var TrackingCategoryORMGetRecordByIDsTestCase = []TestCase{}

func Test_trackingCategoryORM_GetRecordByIDs(t *testing.T) {
	trackingCategoryORM := newTrackingCategoryORM(db)
	do := trackingCategoryORM.WithContext(context.Background()).Debug()

	for i, tt := range TrackingCategoryORMGetRecordByIDsTestCase {
		t.Run("GetRecordByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByIDs(tt.Input.Args[0].([]int))
			assert(t, "GetRecordByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}

var TrackingCategoryORMCreateRecordTestCase = []TestCase{}

func Test_trackingCategoryORM_CreateRecord(t *testing.T) {
	trackingCategoryORM := newTrackingCategoryORM(db)
	do := trackingCategoryORM.WithContext(context.Background()).Debug()

	for i, tt := range TrackingCategoryORMCreateRecordTestCase {
		t.Run("CreateRecord_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.CreateRecord(tt.Input.Args[0].(financial_servicev1.TrackingCategoryORM))
			assert(t, "CreateRecord", res1, tt.Expectation.Ret[0])
		})
	}
}

var TrackingCategoryORMUpdateRecordByIDTestCase = []TestCase{}

func Test_trackingCategoryORM_UpdateRecordByID(t *testing.T) {
	trackingCategoryORM := newTrackingCategoryORM(db)
	do := trackingCategoryORM.WithContext(context.Background()).Debug()

	for i, tt := range TrackingCategoryORMUpdateRecordByIDTestCase {
		t.Run("UpdateRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.UpdateRecordByID(tt.Input.Args[0].(int), tt.Input.Args[1].(financial_servicev1.TrackingCategoryORM))
			assert(t, "UpdateRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var TrackingCategoryORMDeleteRecordByIDTestCase = []TestCase{}

func Test_trackingCategoryORM_DeleteRecordByID(t *testing.T) {
	trackingCategoryORM := newTrackingCategoryORM(db)
	do := trackingCategoryORM.WithContext(context.Background()).Debug()

	for i, tt := range TrackingCategoryORMDeleteRecordByIDTestCase {
		t.Run("DeleteRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.DeleteRecordByID(tt.Input.Args[0].(int))
			assert(t, "DeleteRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var TrackingCategoryORMGetAllRecordsTestCase = []TestCase{}

func Test_trackingCategoryORM_GetAllRecords(t *testing.T) {
	trackingCategoryORM := newTrackingCategoryORM(db)
	do := trackingCategoryORM.WithContext(context.Background()).Debug()

	for i, tt := range TrackingCategoryORMGetAllRecordsTestCase {
		t.Run("GetAllRecords_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetAllRecords(tt.Input.Args[0].(string), tt.Input.Args[1].(int), tt.Input.Args[2].(int))
			assert(t, "GetAllRecords", res1, tt.Expectation.Ret[0])
			assert(t, "GetAllRecords", res2, tt.Expectation.Ret[1])
		})
	}
}

var TrackingCategoryORMCountAllTestCase = []TestCase{}

func Test_trackingCategoryORM_CountAll(t *testing.T) {
	trackingCategoryORM := newTrackingCategoryORM(db)
	do := trackingCategoryORM.WithContext(context.Background()).Debug()

	for i, tt := range TrackingCategoryORMCountAllTestCase {
		t.Run("CountAll_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.CountAll()
			assert(t, "CountAll", res1, tt.Expectation.Ret[0])
			assert(t, "CountAll", res2, tt.Expectation.Ret[1])
		})
	}
}
