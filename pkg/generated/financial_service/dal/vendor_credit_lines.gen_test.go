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
	err := db.AutoMigrate(&financial_servicev1.VendorCreditLineORM{})
	if err != nil {
		fmt.Printf("Error: AutoMigrate(&financial_servicev1.VendorCreditLineORM{}) fail: %s", err)
	}
}

func Test_vendorCreditLineORMQuery(t *testing.T) {
	vendorCreditLineORM := newVendorCreditLineORM(db)
	vendorCreditLineORM = *vendorCreditLineORM.As(vendorCreditLineORM.TableName())
	_do := vendorCreditLineORM.WithContext(context.Background()).Debug()

	primaryKey := field.NewString(vendorCreditLineORM.TableName(), clause.PrimaryKey)
	_, err := _do.Unscoped().Where(primaryKey.IsNotNull()).Delete()
	if err != nil {
		t.Error("clean table <vendor_credit_lines> fail:", err)
		return
	}

	_, ok := vendorCreditLineORM.GetFieldByName("")
	if ok {
		t.Error("GetFieldByName(\"\") from vendorCreditLineORM success")
	}

	err = _do.Create(&financial_servicev1.VendorCreditLineORM{})
	if err != nil {
		t.Error("create item in table <vendor_credit_lines> fail:", err)
	}

	err = _do.Save(&financial_servicev1.VendorCreditLineORM{})
	if err != nil {
		t.Error("create item in table <vendor_credit_lines> fail:", err)
	}

	err = _do.CreateInBatches([]*financial_servicev1.VendorCreditLineORM{{}, {}}, 10)
	if err != nil {
		t.Error("create item in table <vendor_credit_lines> fail:", err)
	}

	_, err = _do.Select(vendorCreditLineORM.ALL).Take()
	if err != nil {
		t.Error("Take() on table <vendor_credit_lines> fail:", err)
	}

	_, err = _do.First()
	if err != nil {
		t.Error("First() on table <vendor_credit_lines> fail:", err)
	}

	_, err = _do.Last()
	if err != nil {
		t.Error("First() on table <vendor_credit_lines> fail:", err)
	}

	_, err = _do.Where(primaryKey.IsNotNull()).FindInBatch(10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatch() on table <vendor_credit_lines> fail:", err)
	}

	err = _do.Where(primaryKey.IsNotNull()).FindInBatches(&[]*financial_servicev1.VendorCreditLineORM{}, 10, func(tx gen.Dao, batch int) error { return nil })
	if err != nil {
		t.Error("FindInBatches() on table <vendor_credit_lines> fail:", err)
	}

	_, err = _do.Select(vendorCreditLineORM.ALL).Where(primaryKey.IsNotNull()).Order(primaryKey.Desc()).Find()
	if err != nil {
		t.Error("Find() on table <vendor_credit_lines> fail:", err)
	}

	_, err = _do.Distinct(primaryKey).Take()
	if err != nil {
		t.Error("select Distinct() on table <vendor_credit_lines> fail:", err)
	}

	_, err = _do.Select(vendorCreditLineORM.ALL).Omit(primaryKey).Take()
	if err != nil {
		t.Error("Omit() on table <vendor_credit_lines> fail:", err)
	}

	_, err = _do.Group(primaryKey).Find()
	if err != nil {
		t.Error("Group() on table <vendor_credit_lines> fail:", err)
	}

	_, err = _do.Scopes(func(dao gen.Dao) gen.Dao { return dao.Where(primaryKey.IsNotNull()) }).Find()
	if err != nil {
		t.Error("Scopes() on table <vendor_credit_lines> fail:", err)
	}

	_, _, err = _do.FindByPage(0, 1)
	if err != nil {
		t.Error("FindByPage() on table <vendor_credit_lines> fail:", err)
	}

	_, err = _do.ScanByPage(&financial_servicev1.VendorCreditLineORM{}, 0, 1)
	if err != nil {
		t.Error("ScanByPage() on table <vendor_credit_lines> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrInit()
	if err != nil {
		t.Error("FirstOrInit() on table <vendor_credit_lines> fail:", err)
	}

	_, err = _do.Attrs(primaryKey).Assign(primaryKey).FirstOrCreate()
	if err != nil {
		t.Error("FirstOrCreate() on table <vendor_credit_lines> fail:", err)
	}

	var _a _another
	var _aPK = field.NewString(_a.TableName(), clause.PrimaryKey)

	err = _do.Join(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("Join() on table <vendor_credit_lines> fail:", err)
	}

	err = _do.LeftJoin(&_a, primaryKey.EqCol(_aPK)).Scan(map[string]interface{}{})
	if err != nil {
		t.Error("LeftJoin() on table <vendor_credit_lines> fail:", err)
	}

	_, err = _do.Not().Or().Clauses().Take()
	if err != nil {
		t.Error("Not/Or/Clauses on table <vendor_credit_lines> fail:", err)
	}
}

var VendorCreditLineORMGetRecordByIDTestCase = []TestCase{}

func Test_vendorCreditLineORM_GetRecordByID(t *testing.T) {
	vendorCreditLineORM := newVendorCreditLineORM(db)
	do := vendorCreditLineORM.WithContext(context.Background()).Debug()

	for i, tt := range VendorCreditLineORMGetRecordByIDTestCase {
		t.Run("GetRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByID(tt.Input.Args[0].(int))
			assert(t, "GetRecordByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var VendorCreditLineORMGetRecordByIDsTestCase = []TestCase{}

func Test_vendorCreditLineORM_GetRecordByIDs(t *testing.T) {
	vendorCreditLineORM := newVendorCreditLineORM(db)
	do := vendorCreditLineORM.WithContext(context.Background()).Debug()

	for i, tt := range VendorCreditLineORMGetRecordByIDsTestCase {
		t.Run("GetRecordByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetRecordByIDs(tt.Input.Args[0].([]int))
			assert(t, "GetRecordByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetRecordByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}

var VendorCreditLineORMCreateRecordTestCase = []TestCase{}

func Test_vendorCreditLineORM_CreateRecord(t *testing.T) {
	vendorCreditLineORM := newVendorCreditLineORM(db)
	do := vendorCreditLineORM.WithContext(context.Background()).Debug()

	for i, tt := range VendorCreditLineORMCreateRecordTestCase {
		t.Run("CreateRecord_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.CreateRecord(tt.Input.Args[0].(financial_servicev1.VendorCreditLineORM))
			assert(t, "CreateRecord", res1, tt.Expectation.Ret[0])
		})
	}
}

var VendorCreditLineORMUpdateRecordByIDTestCase = []TestCase{}

func Test_vendorCreditLineORM_UpdateRecordByID(t *testing.T) {
	vendorCreditLineORM := newVendorCreditLineORM(db)
	do := vendorCreditLineORM.WithContext(context.Background()).Debug()

	for i, tt := range VendorCreditLineORMUpdateRecordByIDTestCase {
		t.Run("UpdateRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.UpdateRecordByID(tt.Input.Args[0].(int), tt.Input.Args[1].(financial_servicev1.VendorCreditLineORM))
			assert(t, "UpdateRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var VendorCreditLineORMDeleteRecordByIDTestCase = []TestCase{}

func Test_vendorCreditLineORM_DeleteRecordByID(t *testing.T) {
	vendorCreditLineORM := newVendorCreditLineORM(db)
	do := vendorCreditLineORM.WithContext(context.Background()).Debug()

	for i, tt := range VendorCreditLineORMDeleteRecordByIDTestCase {
		t.Run("DeleteRecordByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1 := do.DeleteRecordByID(tt.Input.Args[0].(int))
			assert(t, "DeleteRecordByID", res1, tt.Expectation.Ret[0])
		})
	}
}

var VendorCreditLineORMGetAllRecordsTestCase = []TestCase{}

func Test_vendorCreditLineORM_GetAllRecords(t *testing.T) {
	vendorCreditLineORM := newVendorCreditLineORM(db)
	do := vendorCreditLineORM.WithContext(context.Background()).Debug()

	for i, tt := range VendorCreditLineORMGetAllRecordsTestCase {
		t.Run("GetAllRecords_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetAllRecords(tt.Input.Args[0].(string), tt.Input.Args[1].(int), tt.Input.Args[2].(int))
			assert(t, "GetAllRecords", res1, tt.Expectation.Ret[0])
			assert(t, "GetAllRecords", res2, tt.Expectation.Ret[1])
		})
	}
}

var VendorCreditLineORMCountAllTestCase = []TestCase{}

func Test_vendorCreditLineORM_CountAll(t *testing.T) {
	vendorCreditLineORM := newVendorCreditLineORM(db)
	do := vendorCreditLineORM.WithContext(context.Background()).Debug()

	for i, tt := range VendorCreditLineORMCountAllTestCase {
		t.Run("CountAll_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.CountAll()
			assert(t, "CountAll", res1, tt.Expectation.Ret[0])
			assert(t, "CountAll", res2, tt.Expectation.Ret[1])
		})
	}
}

var VendorCreditLineORMGetByIDTestCase = []TestCase{}

func Test_vendorCreditLineORM_GetByID(t *testing.T) {
	vendorCreditLineORM := newVendorCreditLineORM(db)
	do := vendorCreditLineORM.WithContext(context.Background()).Debug()

	for i, tt := range VendorCreditLineORMGetByIDTestCase {
		t.Run("GetByID_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByID(tt.Input.Args[0].(uint64))
			assert(t, "GetByID", res1, tt.Expectation.Ret[0])
			assert(t, "GetByID", res2, tt.Expectation.Ret[1])
		})
	}
}

var VendorCreditLineORMGetByIDsTestCase = []TestCase{}

func Test_vendorCreditLineORM_GetByIDs(t *testing.T) {
	vendorCreditLineORM := newVendorCreditLineORM(db)
	do := vendorCreditLineORM.WithContext(context.Background()).Debug()

	for i, tt := range VendorCreditLineORMGetByIDsTestCase {
		t.Run("GetByIDs_"+strconv.Itoa(i), func(t *testing.T) {
			res1, res2 := do.GetByIDs(tt.Input.Args[0].([]uint64))
			assert(t, "GetByIDs", res1, tt.Expectation.Ret[0])
			assert(t, "GetByIDs", res2, tt.Expectation.Ret[1])
		})
	}
}
