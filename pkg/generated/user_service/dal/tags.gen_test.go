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
	err := db.AutoMigrate(&user_servicev1.TagsORM{})
	if err != nil {
		fmt.Printf("Error: AutoMigrate(&user_servicev1.TagsORM{}) fail: %s", err)
	}
}

func Test_tagsORMQuery(t *testing.T) {
	tagsORM := newTagsORM(db)
	tagsORM = *tagsORM.As(tagsORM.TableName())
	_do := tagsORM.WithContext(context.Background()).Debug()

	primaryKey := field.NewString(tagsORM.TableName(), clause.PrimaryKey)
	_, err := _do.Unscoped().Where(primaryKey.IsNotNull()).Delete()
	if err != nil {
		t.Error("clean table <tags> fail:", err)
		return
	}

	_, ok := tagsORM.GetFieldByName("")
	if ok {
		t.Error("GetFieldByName(\"\") from tagsORM success")
	}

	err = _do.Create(&user_servicev1.TagsORM{})
	if err != nil {
		t.Error("create item in table <tags> fail:", err)
	}

	err = _do.Save(&user_servicev1.TagsORM{})
	if err != nil {
		t.Error("create item in table <tags> fail:", err)
	}

	err = _do.CreateInBatches([]*user_servicev1.TagsORM{{}, {}}, 10)
	if err != nil {
		t.Error("create item in table <tags> fail:", err)
	}

	_, err = _do.Select(tagsORM.ALL).Take()
	if err != nil {
		t.Error("Take() on table <tags> fail:", err)
	}

	_, err = _do.First()
	if err != nil {
		t.Error("First() on table <tags> fail:", err)
	}

	_, err = _do.Last()
	if err != nil {
		t.Error("First() on table <tags> fail:", err)
	}

	_, err = _do.Where(primaryKey.IsNotNull()).FindInBatch(10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatch() on table <tags> fail:", err)
	}

	err = _do.Where(primaryKey.IsNotNull()).FindInBatches(&[]*user_servicev1.TagsORM{}, 10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatches() on table <tags> fail:", err)
	}

	_, err = _do.Select(tagsORM.ALL).Where(primaryKey.IsNotNull()).Order(primaryKey.Desc()).Find()
	if err != nil {
		t.Error("Find() on table <tags> fail:", err)
	}

	_, err = _do.Distinct(primaryKey).Take()
	if err != nil {
		t.Error("select Distinct() on table <tags> fail:", err)
	}

	_, err = _do.Select(tagsORM.ALL).Omit(primaryKey).Take()
	if err != nil {
		t.Error("Omit() on table <tags> fail:", err)
	}

	_, err = _do.Group(primaryKey).Find()
	if err != nil {
		t.Error("Group() on table <tags> fail:", err)
	}

	_, err = _do.Scopes(func(dao gen.Dao) gen.Dao { return dao.Where(primaryKey.IsNotNull()) }).Find()
	if err != nil {
		t.Error("Scopes() on table <tags> fail:", err)
	}

	_, _, err = _do.FindByPage(0, 1)
	if err != nil {
		t.Error("FindByPage() on table <tags> fail:", err)
	}

	_, err = _do.ScanByPage(&user_servicev1.TagsORM{}, 0, 1)
	if err != nil {
		t.Error("ScanByPage() on table <tags> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrInit()
	if err != nil {
		t.Error("FirstOrInit() on table <tags> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrCreate()
	if err != nil {
		t.Error("FirstOrCreate() on table <tags> fail:", err)
	}

	var _a _another
	var _aPK = field.NewString(_a.TableName(), clause.PrimaryKey)

	err = _do.Join(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("Join() on table <tags> fail:", err)
	}

	err = _do.LeftJoin(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("LeftJoin() on table <tags> fail:", err)
	}

	_, err = _do.Not().Or().Clauses().Take()
	if err != nil {
		t.Error("Not/Or/Clauses on table <tags> fail:", err)
	}
}

var TagsORMGetRecordByIDTestCase = []TestCase{}

func Test_tagsORM_GetRecordByID(t *testing.T) {
	tagsORM := newTagsORM(db)
	do := tagsORM.WithContext(context.Background()).Debug()

	for i, tt := range TagsORMGetRecordByIDTestCase {
		t.Run("GetRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByID(tt.Input.Args[0].(int))
			assert(t, "GetRecordByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var TagsORMGetRecordByIDsTestCase = []TestCase{}

func Test_tagsORM_GetRecordByIDs(t *testing.T) {
	tagsORM := newTagsORM(db)
	do := tagsORM.WithContext(context.Background()).Debug()

	for i, tt := range TagsORMGetRecordByIDsTestCase {
		t.Run("GetRecordByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByIDs(tt.Input.Args[0].([]int))
			assert(t, "GetRecordByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}

var TagsORMCreateRecordTestCase = []TestCase{}

func Test_tagsORM_CreateRecord(t *testing.T) {
	tagsORM := newTagsORM(db)
	do := tagsORM.WithContext(context.Background()).Debug()

	for i, tt := range TagsORMCreateRecordTestCase {
		t.Run("CreateRecord_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.CreateRecord(tt.Input.Args[0].(user_servicev1.TagsORM))
			assert(t, "CreateRecord", res1, tt.Expectation.Ret[0])
		})
	}
}

var TagsORMUpdateRecordByIDTestCase = []TestCase{}

func Test_tagsORM_UpdateRecordByID(t *testing.T) {
	tagsORM := newTagsORM(db)
	do := tagsORM.WithContext(context.Background()).Debug()

	for i, tt := range TagsORMUpdateRecordByIDTestCase {
		t.Run("UpdateRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.UpdateRecordByID(tt.Input.Args[0].(int), tt.Input.Args[1].(user_servicev1.TagsORM))
			assert(t, "UpdateRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var TagsORMDeleteRecordByIDTestCase = []TestCase{}

func Test_tagsORM_DeleteRecordByID(t *testing.T) {
	tagsORM := newTagsORM(db)
	do := tagsORM.WithContext(context.Background()).Debug()

	for i, tt := range TagsORMDeleteRecordByIDTestCase {
		t.Run("DeleteRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.DeleteRecordByID(tt.Input.Args[0].(int))
			assert(t, "DeleteRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var TagsORMGetAllRecordsTestCase = []TestCase{}

func Test_tagsORM_GetAllRecords(t *testing.T) {
	tagsORM := newTagsORM(db)
	do := tagsORM.WithContext(context.Background()).Debug()

	for i, tt := range TagsORMGetAllRecordsTestCase {
		t.Run("GetAllRecords_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetAllRecords(tt.Input.Args[0].(string), tt.Input.Args[1].(int), tt.Input.Args[2].(int))
			assert(t, "GetAllRecords", res1, tt.Expectation.Ret[0])
			assert(t, "GetAllRecords", res2, tt.Expectation.Ret[1])
		})
	}
}

var TagsORMCountAllTestCase = []TestCase{}

func Test_tagsORM_CountAll(t *testing.T) {
	tagsORM := newTagsORM(db)
	do := tagsORM.WithContext(context.Background()).Debug()

	for i, tt := range TagsORMCountAllTestCase {
		t.Run("CountAll_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.CountAll()
			assert(t, "CountAll", res1, tt.Expectation.Ret[0])
			assert(t, "CountAll", res2, tt.Expectation.Ret[1])
		})
	}
}

var TagsORMGetByIDTestCase = []TestCase{}

func Test_tagsORM_GetByID(t *testing.T) {
	tagsORM := newTagsORM(db)
	do := tagsORM.WithContext(context.Background()).Debug()

	for i, tt := range TagsORMGetByIDTestCase {
		t.Run("GetByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByID(tt.Input.Args[0].(uint64))
			assert(t, "GetByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var TagsORMGetByIDsTestCase = []TestCase{}

func Test_tagsORM_GetByIDs(t *testing.T) {
	tagsORM := newTagsORM(db)
	do := tagsORM.WithContext(context.Background()).Debug()

	for i, tt := range TagsORMGetByIDsTestCase {
		t.Run("GetByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByIDs(tt.Input.Args[0].([]uint64))
			assert(t, "GetByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}
