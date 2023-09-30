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
	err := db.AutoMigrate(&social_servicev2.FollowerORM{})
	if err != nil {
		fmt.Printf("Error: AutoMigrate(&social_servicev2.FollowerORM{}) fail: %s", err)
	}
}

func Test_followerORMQuery(t *testing.T) {
	followerORM := newFollowerORM(db)
	followerORM = *followerORM.As(followerORM.TableName())
	_do := followerORM.WithContext(context.Background()).Debug()

	primaryKey := field.NewString(followerORM.TableName(), clause.PrimaryKey)
	_, err := _do.Unscoped().Where(primaryKey.IsNotNull()).Delete()
	if err != nil {
		t.Error("clean table <followers> fail:", err)
		return
	}

	_, ok := followerORM.GetFieldByName("")
	if ok {
		t.Error("GetFieldByName(\"\") from followerORM success")
	}

	err = _do.Create(&social_servicev2.FollowerORM{})
	if err != nil {
		t.Error("create item in table <followers> fail:", err)
	}

	err = _do.Save(&social_servicev2.FollowerORM{})
	if err != nil {
		t.Error("create item in table <followers> fail:", err)
	}

	err = _do.CreateInBatches([]*social_servicev2.FollowerORM{{}, {}}, 10)
	if err != nil {
		t.Error("create item in table <followers> fail:", err)
	}

	_, err = _do.Select(followerORM.ALL).Take()
	if err != nil {
		t.Error("Take() on table <followers> fail:", err)
	}

	_, err = _do.First()
	if err != nil {
		t.Error("First() on table <followers> fail:", err)
	}

	_, err = _do.Last()
	if err != nil {
		t.Error("First() on table <followers> fail:", err)
	}

	_, err = _do.Where(primaryKey.IsNotNull()).FindInBatch(10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatch() on table <followers> fail:", err)
	}

	err = _do.Where(primaryKey.IsNotNull()).FindInBatches(&[]*social_servicev2.FollowerORM{}, 10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatches() on table <followers> fail:", err)
	}

	_, err = _do.Select(followerORM.ALL).Where(primaryKey.IsNotNull()).Order(primaryKey.Desc()).Find()
	if err != nil {
		t.Error("Find() on table <followers> fail:", err)
	}

	_, err = _do.Distinct(primaryKey).Take()
	if err != nil {
		t.Error("select Distinct() on table <followers> fail:", err)
	}

	_, err = _do.Select(followerORM.ALL).Omit(primaryKey).Take()
	if err != nil {
		t.Error("Omit() on table <followers> fail:", err)
	}

	_, err = _do.Group(primaryKey).Find()
	if err != nil {
		t.Error("Group() on table <followers> fail:", err)
	}

	_, err = _do.Scopes(func(dao gen.Dao) gen.Dao { return dao.Where(primaryKey.IsNotNull()) }).Find()
	if err != nil {
		t.Error("Scopes() on table <followers> fail:", err)
	}

	_, _, err = _do.FindByPage(0, 1)
	if err != nil {
		t.Error("FindByPage() on table <followers> fail:", err)
	}

	_, err = _do.ScanByPage(&social_servicev2.FollowerORM{}, 0, 1)
	if err != nil {
		t.Error("ScanByPage() on table <followers> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrInit()
	if err != nil {
		t.Error("FirstOrInit() on table <followers> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrCreate()
	if err != nil {
		t.Error("FirstOrCreate() on table <followers> fail:", err)
	}

	var _a _another
	var _aPK = field.NewString(_a.TableName(), clause.PrimaryKey)

	err = _do.Join(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("Join() on table <followers> fail:", err)
	}

	err = _do.LeftJoin(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("LeftJoin() on table <followers> fail:", err)
	}

	_, err = _do.Not().Or().Clauses().Take()
	if err != nil {
		t.Error("Not/Or/Clauses on table <followers> fail:", err)
	}
}

var FollowerORMGetRecordByIDTestCase = []TestCase{}

func Test_followerORM_GetRecordByID(t *testing.T) {
	followerORM := newFollowerORM(db)
	do := followerORM.WithContext(context.Background()).Debug()

	for i, tt := range FollowerORMGetRecordByIDTestCase {
		t.Run("GetRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByID(tt.Input.Args[0].(int))
			assert(t, "GetRecordByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var FollowerORMGetRecordByIDsTestCase = []TestCase{}

func Test_followerORM_GetRecordByIDs(t *testing.T) {
	followerORM := newFollowerORM(db)
	do := followerORM.WithContext(context.Background()).Debug()

	for i, tt := range FollowerORMGetRecordByIDsTestCase {
		t.Run("GetRecordByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByIDs(tt.Input.Args[0].([]int))
			assert(t, "GetRecordByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}

var FollowerORMCreateRecordTestCase = []TestCase{}

func Test_followerORM_CreateRecord(t *testing.T) {
	followerORM := newFollowerORM(db)
	do := followerORM.WithContext(context.Background()).Debug()

	for i, tt := range FollowerORMCreateRecordTestCase {
		t.Run("CreateRecord_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.CreateRecord(tt.Input.Args[0].(social_servicev2.FollowerORM))
			assert(t, "CreateRecord", res1, tt.Expectation.Ret[0])
		})
	}
}

var FollowerORMUpdateRecordByIDTestCase = []TestCase{}

func Test_followerORM_UpdateRecordByID(t *testing.T) {
	followerORM := newFollowerORM(db)
	do := followerORM.WithContext(context.Background()).Debug()

	for i, tt := range FollowerORMUpdateRecordByIDTestCase {
		t.Run("UpdateRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.UpdateRecordByID(tt.Input.Args[0].(int), tt.Input.Args[1].(social_servicev2.FollowerORM))
			assert(t, "UpdateRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var FollowerORMDeleteRecordByIDTestCase = []TestCase{}

func Test_followerORM_DeleteRecordByID(t *testing.T) {
	followerORM := newFollowerORM(db)
	do := followerORM.WithContext(context.Background()).Debug()

	for i, tt := range FollowerORMDeleteRecordByIDTestCase {
		t.Run("DeleteRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.DeleteRecordByID(tt.Input.Args[0].(int))
			assert(t, "DeleteRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var FollowerORMGetAllRecordsTestCase = []TestCase{}

func Test_followerORM_GetAllRecords(t *testing.T) {
	followerORM := newFollowerORM(db)
	do := followerORM.WithContext(context.Background()).Debug()

	for i, tt := range FollowerORMGetAllRecordsTestCase {
		t.Run("GetAllRecords_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetAllRecords(tt.Input.Args[0].(string), tt.Input.Args[1].(int), tt.Input.Args[2].(int))
			assert(t, "GetAllRecords", res1, tt.Expectation.Ret[0])
			assert(t, "GetAllRecords", res2, tt.Expectation.Ret[1])
		})
	}
}

var FollowerORMCountAllTestCase = []TestCase{}

func Test_followerORM_CountAll(t *testing.T) {
	followerORM := newFollowerORM(db)
	do := followerORM.WithContext(context.Background()).Debug()

	for i, tt := range FollowerORMCountAllTestCase {
		t.Run("CountAll_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.CountAll()
			assert(t, "CountAll", res1, tt.Expectation.Ret[0])
			assert(t, "CountAll", res2, tt.Expectation.Ret[1])
		})
	}
}
