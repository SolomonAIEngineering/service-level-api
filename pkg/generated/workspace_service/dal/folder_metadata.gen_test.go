// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"
	"fmt"
	"strconv"
	"testing"

	workspace_servicev1 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/workspace_service/v1"
	"gorm.io/gen"
	"gorm.io/gen/field"
	"gorm.io/gorm/clause"
)

func init() {
	InitializeDB()
	err := db.AutoMigrate(&workspace_servicev1.FolderMetadataORM{})
	if err != nil {
		fmt.Printf("Error: AutoMigrate(&workspace_servicev1.FolderMetadataORM{}) fail: %s", err)
	}
}

func Test_folderMetadataORMQuery(t *testing.T) {
	folderMetadataORM := newFolderMetadataORM(db)
	folderMetadataORM = *folderMetadataORM.As(folderMetadataORM.TableName())
	_do := folderMetadataORM.WithContext(context.Background()).Debug()

	primaryKey := field.NewString(folderMetadataORM.TableName(), clause.PrimaryKey)
	_, err := _do.Unscoped().Where(primaryKey.IsNotNull()).Delete()
	if err != nil {
		t.Error("clean table <folder_metadata> fail:", err)
		return
	}

	_, ok := folderMetadataORM.GetFieldByName("")
	if ok {
		t.Error("GetFieldByName(\"\") from folderMetadataORM success")
	}

	err = _do.Create(&workspace_servicev1.FolderMetadataORM{})
	if err != nil {
		t.Error("create item in table <folder_metadata> fail:", err)
	}

	err = _do.Save(&workspace_servicev1.FolderMetadataORM{})
	if err != nil {
		t.Error("create item in table <folder_metadata> fail:", err)
	}

	err = _do.CreateInBatches([]*workspace_servicev1.FolderMetadataORM{{}, {}}, 10)
	if err != nil {
		t.Error("create item in table <folder_metadata> fail:", err)
	}

	_, err = _do.Select(folderMetadataORM.ALL).Take()
	if err != nil {
		t.Error("Take() on table <folder_metadata> fail:", err)
	}

	_, err = _do.First()
	if err != nil {
		t.Error("First() on table <folder_metadata> fail:", err)
	}

	_, err = _do.Last()
	if err != nil {
		t.Error("First() on table <folder_metadata> fail:", err)
	}

	_, err = _do.Where(primaryKey.IsNotNull()).FindInBatch(10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatch() on table <folder_metadata> fail:", err)
	}

	err = _do.Where(primaryKey.IsNotNull()).FindInBatches(&[]*workspace_servicev1.FolderMetadataORM{}, 10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatches() on table <folder_metadata> fail:", err)
	}

	_, err = _do.Select(folderMetadataORM.ALL).Where(primaryKey.IsNotNull()).Order(primaryKey.Desc()).Find()
	if err != nil {
		t.Error("Find() on table <folder_metadata> fail:", err)
	}

	_, err = _do.Distinct(primaryKey).Take()
	if err != nil {
		t.Error("select Distinct() on table <folder_metadata> fail:", err)
	}

	_, err = _do.Select(folderMetadataORM.ALL).Omit(primaryKey).Take()
	if err != nil {
		t.Error("Omit() on table <folder_metadata> fail:", err)
	}

	_, err = _do.Group(primaryKey).Find()
	if err != nil {
		t.Error("Group() on table <folder_metadata> fail:", err)
	}

	_, err = _do.Scopes(func(dao gen.Dao) gen.Dao { return dao.Where(primaryKey.IsNotNull()) }).Find()
	if err != nil {
		t.Error("Scopes() on table <folder_metadata> fail:", err)
	}

	_, _, err = _do.FindByPage(0, 1)
	if err != nil {
		t.Error("FindByPage() on table <folder_metadata> fail:", err)
	}

	_, err = _do.ScanByPage(&workspace_servicev1.FolderMetadataORM{}, 0, 1)
	if err != nil {
		t.Error("ScanByPage() on table <folder_metadata> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrInit()
	if err != nil {
		t.Error("FirstOrInit() on table <folder_metadata> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrCreate()
	if err != nil {
		t.Error("FirstOrCreate() on table <folder_metadata> fail:", err)
	}

	var _a _another
	var _aPK = field.NewString(_a.TableName(), clause.PrimaryKey)

	err = _do.Join(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("Join() on table <folder_metadata> fail:", err)
	}

	err = _do.LeftJoin(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("LeftJoin() on table <folder_metadata> fail:", err)
	}

	_, err = _do.Not().Or().Clauses().Take()
	if err != nil {
		t.Error("Not/Or/Clauses on table <folder_metadata> fail:", err)
	}
}

var FolderMetadataORMGetRecordByIDTestCase = []TestCase{}

func Test_folderMetadataORM_GetRecordByID(t *testing.T) {
	folderMetadataORM := newFolderMetadataORM(db)
	do := folderMetadataORM.WithContext(context.Background()).Debug()

	for i, tt := range FolderMetadataORMGetRecordByIDTestCase {
		t.Run("GetRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByID(tt.Input.Args[0].(int))
			assert(t, "GetRecordByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var FolderMetadataORMGetRecordByIDsTestCase = []TestCase{}

func Test_folderMetadataORM_GetRecordByIDs(t *testing.T) {
	folderMetadataORM := newFolderMetadataORM(db)
	do := folderMetadataORM.WithContext(context.Background()).Debug()

	for i, tt := range FolderMetadataORMGetRecordByIDsTestCase {
		t.Run("GetRecordByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByIDs(tt.Input.Args[0].([]int))
			assert(t, "GetRecordByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}

var FolderMetadataORMCreateRecordTestCase = []TestCase{}

func Test_folderMetadataORM_CreateRecord(t *testing.T) {
	folderMetadataORM := newFolderMetadataORM(db)
	do := folderMetadataORM.WithContext(context.Background()).Debug()

	for i, tt := range FolderMetadataORMCreateRecordTestCase {
		t.Run("CreateRecord_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.CreateRecord(tt.Input.Args[0].(workspace_servicev1.FolderMetadataORM))
			assert(t, "CreateRecord", res1, tt.Expectation.Ret[0])
		})
	}
}

var FolderMetadataORMUpdateRecordByIDTestCase = []TestCase{}

func Test_folderMetadataORM_UpdateRecordByID(t *testing.T) {
	folderMetadataORM := newFolderMetadataORM(db)
	do := folderMetadataORM.WithContext(context.Background()).Debug()

	for i, tt := range FolderMetadataORMUpdateRecordByIDTestCase {
		t.Run("UpdateRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.UpdateRecordByID(tt.Input.Args[0].(int), tt.Input.Args[1].(workspace_servicev1.FolderMetadataORM))
			assert(t, "UpdateRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var FolderMetadataORMDeleteRecordByIDTestCase = []TestCase{}

func Test_folderMetadataORM_DeleteRecordByID(t *testing.T) {
	folderMetadataORM := newFolderMetadataORM(db)
	do := folderMetadataORM.WithContext(context.Background()).Debug()

	for i, tt := range FolderMetadataORMDeleteRecordByIDTestCase {
		t.Run("DeleteRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.DeleteRecordByID(tt.Input.Args[0].(int))
			assert(t, "DeleteRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var FolderMetadataORMGetAllRecordsTestCase = []TestCase{}

func Test_folderMetadataORM_GetAllRecords(t *testing.T) {
	folderMetadataORM := newFolderMetadataORM(db)
	do := folderMetadataORM.WithContext(context.Background()).Debug()

	for i, tt := range FolderMetadataORMGetAllRecordsTestCase {
		t.Run("GetAllRecords_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetAllRecords(tt.Input.Args[0].(string), tt.Input.Args[1].(int), tt.Input.Args[2].(int))
			assert(t, "GetAllRecords", res1, tt.Expectation.Ret[0])
			assert(t, "GetAllRecords", res2, tt.Expectation.Ret[1])
		})
	}
}

var FolderMetadataORMCountAllTestCase = []TestCase{}

func Test_folderMetadataORM_CountAll(t *testing.T) {
	folderMetadataORM := newFolderMetadataORM(db)
	do := folderMetadataORM.WithContext(context.Background()).Debug()

	for i, tt := range FolderMetadataORMCountAllTestCase {
		t.Run("CountAll_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.CountAll()
			assert(t, "CountAll", res1, tt.Expectation.Ret[0])
			assert(t, "CountAll", res2, tt.Expectation.Ret[1])
		})
	}
}

var FolderMetadataORMGetByIDTestCase = []TestCase{}

func Test_folderMetadataORM_GetByID(t *testing.T) {
	folderMetadataORM := newFolderMetadataORM(db)
	do := folderMetadataORM.WithContext(context.Background()).Debug()

	for i, tt := range FolderMetadataORMGetByIDTestCase {
		t.Run("GetByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByID(tt.Input.Args[0].(uint64))
			assert(t, "GetByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var FolderMetadataORMGetByIDsTestCase = []TestCase{}

func Test_folderMetadataORM_GetByIDs(t *testing.T) {
	folderMetadataORM := newFolderMetadataORM(db)
	do := folderMetadataORM.WithContext(context.Background()).Debug()

	for i, tt := range FolderMetadataORMGetByIDsTestCase {
		t.Run("GetByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByIDs(tt.Input.Args[0].([]uint64))
			assert(t, "GetByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}
