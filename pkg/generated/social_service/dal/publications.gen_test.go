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
	err := db.AutoMigrate(&social_servicev2.PublicationORM{})
	if err != nil {
		fmt.Printf("Error: AutoMigrate(&social_servicev2.PublicationORM{}) fail: %s", err)
	}
}

func Test_publicationORMQuery(t *testing.T) {
	publicationORM := newPublicationORM(db)
	publicationORM = *publicationORM.As(publicationORM.TableName())
	_do := publicationORM.WithContext(context.Background()).Debug()

	primaryKey := field.NewString(publicationORM.TableName(), clause.PrimaryKey)
	_, err := _do.Unscoped().Where(primaryKey.IsNotNull()).Delete()
	if err != nil {
		t.Error("clean table <publications> fail:", err)
		return
	}

	_, ok := publicationORM.GetFieldByName("")
	if ok {
		t.Error("GetFieldByName(\"\") from publicationORM success")
	}

	err = _do.Create(&social_servicev2.PublicationORM{})
	if err != nil {
		t.Error("create item in table <publications> fail:", err)
	}

	err = _do.Save(&social_servicev2.PublicationORM{})
	if err != nil {
		t.Error("create item in table <publications> fail:", err)
	}

	err = _do.CreateInBatches([]*social_servicev2.PublicationORM{{}, {}}, 10)
	if err != nil {
		t.Error("create item in table <publications> fail:", err)
	}

	_, err = _do.Select(publicationORM.ALL).Take()
	if err != nil {
		t.Error("Take() on table <publications> fail:", err)
	}

	_, err = _do.First()
	if err != nil {
		t.Error("First() on table <publications> fail:", err)
	}

	_, err = _do.Last()
	if err != nil {
		t.Error("First() on table <publications> fail:", err)
	}

	_, err = _do.Where(primaryKey.IsNotNull()).FindInBatch(10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatch() on table <publications> fail:", err)
	}

	err = _do.Where(primaryKey.IsNotNull()).FindInBatches(&[]*social_servicev2.PublicationORM{}, 10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatches() on table <publications> fail:", err)
	}

	_, err = _do.Select(publicationORM.ALL).Where(primaryKey.IsNotNull()).Order(primaryKey.Desc()).Find()
	if err != nil {
		t.Error("Find() on table <publications> fail:", err)
	}

	_, err = _do.Distinct(primaryKey).Take()
	if err != nil {
		t.Error("select Distinct() on table <publications> fail:", err)
	}

	_, err = _do.Select(publicationORM.ALL).Omit(primaryKey).Take()
	if err != nil {
		t.Error("Omit() on table <publications> fail:", err)
	}

	_, err = _do.Group(primaryKey).Find()
	if err != nil {
		t.Error("Group() on table <publications> fail:", err)
	}

	_, err = _do.Scopes(func(dao gen.Dao) gen.Dao { return dao.Where(primaryKey.IsNotNull()) }).Find()
	if err != nil {
		t.Error("Scopes() on table <publications> fail:", err)
	}

	_, _, err = _do.FindByPage(0, 1)
	if err != nil {
		t.Error("FindByPage() on table <publications> fail:", err)
	}

	_, err = _do.ScanByPage(&social_servicev2.PublicationORM{}, 0, 1)
	if err != nil {
		t.Error("ScanByPage() on table <publications> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrInit()
	if err != nil {
		t.Error("FirstOrInit() on table <publications> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrCreate()
	if err != nil {
		t.Error("FirstOrCreate() on table <publications> fail:", err)
	}

	var _a _another
	var _aPK = field.NewString(_a.TableName(), clause.PrimaryKey)

	err = _do.Join(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("Join() on table <publications> fail:", err)
	}

	err = _do.LeftJoin(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("LeftJoin() on table <publications> fail:", err)
	}

	_, err = _do.Not().Or().Clauses().Take()
	if err != nil {
		t.Error("Not/Or/Clauses on table <publications> fail:", err)
	}
}

var PublicationORMGetRecordByIDTestCase = []TestCase{}

func Test_publicationORM_GetRecordByID(t *testing.T) {
	publicationORM := newPublicationORM(db)
	do := publicationORM.WithContext(context.Background()).Debug()

	for i, tt := range PublicationORMGetRecordByIDTestCase {
		t.Run("GetRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByID(tt.Input.Args[0].(int))
			assert(t, "GetRecordByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var PublicationORMGetRecordByIDsTestCase = []TestCase{}

func Test_publicationORM_GetRecordByIDs(t *testing.T) {
	publicationORM := newPublicationORM(db)
	do := publicationORM.WithContext(context.Background()).Debug()

	for i, tt := range PublicationORMGetRecordByIDsTestCase {
		t.Run("GetRecordByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByIDs(tt.Input.Args[0].([]int))
			assert(t, "GetRecordByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}

var PublicationORMCreateRecordTestCase = []TestCase{}

func Test_publicationORM_CreateRecord(t *testing.T) {
	publicationORM := newPublicationORM(db)
	do := publicationORM.WithContext(context.Background()).Debug()

	for i, tt := range PublicationORMCreateRecordTestCase {
		t.Run("CreateRecord_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.CreateRecord(tt.Input.Args[0].(social_servicev2.PublicationORM))
			assert(t, "CreateRecord", res1, tt.Expectation.Ret[0])
		})
	}
}

var PublicationORMUpdateRecordByIDTestCase = []TestCase{}

func Test_publicationORM_UpdateRecordByID(t *testing.T) {
	publicationORM := newPublicationORM(db)
	do := publicationORM.WithContext(context.Background()).Debug()

	for i, tt := range PublicationORMUpdateRecordByIDTestCase {
		t.Run("UpdateRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.UpdateRecordByID(tt.Input.Args[0].(int), tt.Input.Args[1].(social_servicev2.PublicationORM))
			assert(t, "UpdateRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var PublicationORMDeleteRecordByIDTestCase = []TestCase{}

func Test_publicationORM_DeleteRecordByID(t *testing.T) {
	publicationORM := newPublicationORM(db)
	do := publicationORM.WithContext(context.Background()).Debug()

	for i, tt := range PublicationORMDeleteRecordByIDTestCase {
		t.Run("DeleteRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.DeleteRecordByID(tt.Input.Args[0].(int))
			assert(t, "DeleteRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var PublicationORMGetAllRecordsTestCase = []TestCase{}

func Test_publicationORM_GetAllRecords(t *testing.T) {
	publicationORM := newPublicationORM(db)
	do := publicationORM.WithContext(context.Background()).Debug()

	for i, tt := range PublicationORMGetAllRecordsTestCase {
		t.Run("GetAllRecords_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetAllRecords(tt.Input.Args[0].(string), tt.Input.Args[1].(int), tt.Input.Args[2].(int))
			assert(t, "GetAllRecords", res1, tt.Expectation.Ret[0])
			assert(t, "GetAllRecords", res2, tt.Expectation.Ret[1])
		})
	}
}

var PublicationORMCountAllTestCase = []TestCase{}

func Test_publicationORM_CountAll(t *testing.T) {
	publicationORM := newPublicationORM(db)
	do := publicationORM.WithContext(context.Background()).Debug()

	for i, tt := range PublicationORMCountAllTestCase {
		t.Run("CountAll_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.CountAll()
			assert(t, "CountAll", res1, tt.Expectation.Ret[0])
			assert(t, "CountAll", res2, tt.Expectation.Ret[1])
		})
	}
}

var PublicationORMGetByIDTestCase = []TestCase{}

func Test_publicationORM_GetByID(t *testing.T) {
	publicationORM := newPublicationORM(db)
	do := publicationORM.WithContext(context.Background()).Debug()

	for i, tt := range PublicationORMGetByIDTestCase {
		t.Run("GetByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByID(tt.Input.Args[0].(uint64))
			assert(t, "GetByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var PublicationORMGetByIDsTestCase = []TestCase{}

func Test_publicationORM_GetByIDs(t *testing.T) {
	publicationORM := newPublicationORM(db)
	do := publicationORM.WithContext(context.Background()).Debug()

	for i, tt := range PublicationORMGetByIDsTestCase {
		t.Run("GetByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByIDs(tt.Input.Args[0].([]uint64))
			assert(t, "GetByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}
