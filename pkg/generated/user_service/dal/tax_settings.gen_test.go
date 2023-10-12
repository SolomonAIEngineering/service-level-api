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
	err := db.AutoMigrate(&user_servicev1.TaxSettingsORM{})
	if err != nil {
		fmt.Printf("Error: AutoMigrate(&user_servicev1.TaxSettingsORM{}) fail: %s", err)
	}
}

func Test_taxSettingsORMQuery(t *testing.T) {
	taxSettingsORM := newTaxSettingsORM(db)
	taxSettingsORM = *taxSettingsORM.As(taxSettingsORM.TableName())
	_do := taxSettingsORM.WithContext(context.Background()).Debug()

	primaryKey := field.NewString(taxSettingsORM.TableName(), clause.PrimaryKey)
	_, err := _do.Unscoped().Where(primaryKey.IsNotNull()).Delete()
	if err != nil {
		t.Error("clean table <tax_settings> fail:", err)
		return
	}

	_, ok := taxSettingsORM.GetFieldByName("")
	if ok {
		t.Error("GetFieldByName(\"\") from taxSettingsORM success")
	}

	err = _do.Create(&user_servicev1.TaxSettingsORM{})
	if err != nil {
		t.Error("create item in table <tax_settings> fail:", err)
	}

	err = _do.Save(&user_servicev1.TaxSettingsORM{})
	if err != nil {
		t.Error("create item in table <tax_settings> fail:", err)
	}

	err = _do.CreateInBatches([]*user_servicev1.TaxSettingsORM{{}, {}}, 10)
	if err != nil {
		t.Error("create item in table <tax_settings> fail:", err)
	}

	_, err = _do.Select(taxSettingsORM.ALL).Take()
	if err != nil {
		t.Error("Take() on table <tax_settings> fail:", err)
	}

	_, err = _do.First()
	if err != nil {
		t.Error("First() on table <tax_settings> fail:", err)
	}

	_, err = _do.Last()
	if err != nil {
		t.Error("First() on table <tax_settings> fail:", err)
	}

	_, err = _do.Where(primaryKey.IsNotNull()).FindInBatch(10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatch() on table <tax_settings> fail:", err)
	}

	err = _do.Where(primaryKey.IsNotNull()).FindInBatches(&[]*user_servicev1.TaxSettingsORM{}, 10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatches() on table <tax_settings> fail:", err)
	}

	_, err = _do.Select(taxSettingsORM.ALL).Where(primaryKey.IsNotNull()).Order(primaryKey.Desc()).Find()
	if err != nil {
		t.Error("Find() on table <tax_settings> fail:", err)
	}

	_, err = _do.Distinct(primaryKey).Take()
	if err != nil {
		t.Error("select Distinct() on table <tax_settings> fail:", err)
	}

	_, err = _do.Select(taxSettingsORM.ALL).Omit(primaryKey).Take()
	if err != nil {
		t.Error("Omit() on table <tax_settings> fail:", err)
	}

	_, err = _do.Group(primaryKey).Find()
	if err != nil {
		t.Error("Group() on table <tax_settings> fail:", err)
	}

	_, err = _do.Scopes(func(dao gen.Dao) gen.Dao { return dao.Where(primaryKey.IsNotNull()) }).Find()
	if err != nil {
		t.Error("Scopes() on table <tax_settings> fail:", err)
	}

	_, _, err = _do.FindByPage(0, 1)
	if err != nil {
		t.Error("FindByPage() on table <tax_settings> fail:", err)
	}

	_, err = _do.ScanByPage(&user_servicev1.TaxSettingsORM{}, 0, 1)
	if err != nil {
		t.Error("ScanByPage() on table <tax_settings> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrInit()
	if err != nil {
		t.Error("FirstOrInit() on table <tax_settings> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrCreate()
	if err != nil {
		t.Error("FirstOrCreate() on table <tax_settings> fail:", err)
	}

	var _a _another
	var _aPK = field.NewString(_a.TableName(), clause.PrimaryKey)

	err = _do.Join(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("Join() on table <tax_settings> fail:", err)
	}

	err = _do.LeftJoin(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("LeftJoin() on table <tax_settings> fail:", err)
	}

	_, err = _do.Not().Or().Clauses().Take()
	if err != nil {
		t.Error("Not/Or/Clauses on table <tax_settings> fail:", err)
	}
}

var TaxSettingsORMGetRecordByIDTestCase = []TestCase{}

func Test_taxSettingsORM_GetRecordByID(t *testing.T) {
	taxSettingsORM := newTaxSettingsORM(db)
	do := taxSettingsORM.WithContext(context.Background()).Debug()

	for i, tt := range TaxSettingsORMGetRecordByIDTestCase {
		t.Run("GetRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByID(tt.Input.Args[0].(int))
			assert(t, "GetRecordByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var TaxSettingsORMGetRecordByIDsTestCase = []TestCase{}

func Test_taxSettingsORM_GetRecordByIDs(t *testing.T) {
	taxSettingsORM := newTaxSettingsORM(db)
	do := taxSettingsORM.WithContext(context.Background()).Debug()

	for i, tt := range TaxSettingsORMGetRecordByIDsTestCase {
		t.Run("GetRecordByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByIDs(tt.Input.Args[0].([]int))
			assert(t, "GetRecordByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}

var TaxSettingsORMCreateRecordTestCase = []TestCase{}

func Test_taxSettingsORM_CreateRecord(t *testing.T) {
	taxSettingsORM := newTaxSettingsORM(db)
	do := taxSettingsORM.WithContext(context.Background()).Debug()

	for i, tt := range TaxSettingsORMCreateRecordTestCase {
		t.Run("CreateRecord_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.CreateRecord(tt.Input.Args[0].(user_servicev1.TaxSettingsORM))
			assert(t, "CreateRecord", res1, tt.Expectation.Ret[0])
		})
	}
}

var TaxSettingsORMUpdateRecordByIDTestCase = []TestCase{}

func Test_taxSettingsORM_UpdateRecordByID(t *testing.T) {
	taxSettingsORM := newTaxSettingsORM(db)
	do := taxSettingsORM.WithContext(context.Background()).Debug()

	for i, tt := range TaxSettingsORMUpdateRecordByIDTestCase {
		t.Run("UpdateRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.UpdateRecordByID(tt.Input.Args[0].(int), tt.Input.Args[1].(user_servicev1.TaxSettingsORM))
			assert(t, "UpdateRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var TaxSettingsORMDeleteRecordByIDTestCase = []TestCase{}

func Test_taxSettingsORM_DeleteRecordByID(t *testing.T) {
	taxSettingsORM := newTaxSettingsORM(db)
	do := taxSettingsORM.WithContext(context.Background()).Debug()

	for i, tt := range TaxSettingsORMDeleteRecordByIDTestCase {
		t.Run("DeleteRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.DeleteRecordByID(tt.Input.Args[0].(int))
			assert(t, "DeleteRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var TaxSettingsORMGetAllRecordsTestCase = []TestCase{}

func Test_taxSettingsORM_GetAllRecords(t *testing.T) {
	taxSettingsORM := newTaxSettingsORM(db)
	do := taxSettingsORM.WithContext(context.Background()).Debug()

	for i, tt := range TaxSettingsORMGetAllRecordsTestCase {
		t.Run("GetAllRecords_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetAllRecords(tt.Input.Args[0].(string), tt.Input.Args[1].(int), tt.Input.Args[2].(int))
			assert(t, "GetAllRecords", res1, tt.Expectation.Ret[0])
			assert(t, "GetAllRecords", res2, tt.Expectation.Ret[1])
		})
	}
}

var TaxSettingsORMCountAllTestCase = []TestCase{}

func Test_taxSettingsORM_CountAll(t *testing.T) {
	taxSettingsORM := newTaxSettingsORM(db)
	do := taxSettingsORM.WithContext(context.Background()).Debug()

	for i, tt := range TaxSettingsORMCountAllTestCase {
		t.Run("CountAll_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.CountAll()
			assert(t, "CountAll", res1, tt.Expectation.Ret[0])
			assert(t, "CountAll", res2, tt.Expectation.Ret[1])
		})
	}
}