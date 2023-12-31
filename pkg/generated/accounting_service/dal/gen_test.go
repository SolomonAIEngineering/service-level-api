// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"
	"fmt"
	"reflect"
	"sync"
	"testing"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Input struct {
	Args []interface{}
}

type Expectation struct {
	Ret []interface{}
}

type TestCase struct {
	Input
	Expectation
}

const dbName = "gen_test.db"

var db *gorm.DB
var once sync.Once

func init() {
	InitializeDB()
	db.AutoMigrate(&_another{})
}

func InitializeDB() {
	once.Do(func() {
		var err error
		db, err = gorm.Open(sqlite.Open(dbName), &gorm.Config{})
		if err != nil {
			panic(fmt.Errorf("open sqlite %q fail: %w", dbName, err))
		}
	})
}

func assert(t *testing.T, methodName string, res, exp interface{}) {
	if !reflect.DeepEqual(res, exp) {
		t.Errorf("%v() gotResult = %v, want %v", methodName, res, exp)
	}
}

type _another struct {
	ID uint64 `gorm:"primaryKey"`
}

func (*_another) TableName() string { return "another_for_unit_test" }

func Test_Available(t *testing.T) {
	if !Use(db).Available() {
		t.Errorf("query.Available() == false")
	}
}

func Test_WithContext(t *testing.T) {
	query := Use(db)
	if !query.Available() {
		t.Errorf("query Use(db) fail: query.Available() == false")
	}

	type Content string
	var key, value Content = "gen_tag", "unit_test"
	qCtx := query.WithContext(context.WithValue(context.Background(), key, value))

	for _, ctx := range []context.Context{
		qCtx.AccountingAttachmentORM.UnderlyingDB().Statement.Context,
		qCtx.AccountingIntegrationMergeLinkORM.UnderlyingDB().Statement.Context,
		qCtx.BalanceSheetORM.UnderlyingDB().Statement.Context,
		qCtx.BankInfoORM.UnderlyingDB().Statement.Context,
		qCtx.BusinessActionableInsightORM.UnderlyingDB().Statement.Context,
		qCtx.BusinessChartOfAccountORM.UnderlyingDB().Statement.Context,
		qCtx.BusinessTransactionORM.UnderlyingDB().Statement.Context,
		qCtx.CashFlowStatementORM.UnderlyingDB().Statement.Context,
		qCtx.CompanyAddressORM.UnderlyingDB().Statement.Context,
		qCtx.CompanyInfoORM.UnderlyingDB().Statement.Context,
		qCtx.CompanyProfileORM.UnderlyingDB().Statement.Context,
		qCtx.ContactsORM.UnderlyingDB().Statement.Context,
		qCtx.CreditNoteLineItemORM.UnderlyingDB().Statement.Context,
		qCtx.CreditNoteORM.UnderlyingDB().Statement.Context,
		qCtx.DeductionORM.UnderlyingDB().Statement.Context,
		qCtx.DependentsORM.UnderlyingDB().Statement.Context,
		qCtx.EarningORM.UnderlyingDB().Statement.Context,
		qCtx.EmployeTimeOffBalanceORM.UnderlyingDB().Statement.Context,
		qCtx.EmployeeBenefitsORM.UnderlyingDB().Statement.Context,
		qCtx.EmployeeJobPositionAtCompanyORM.UnderlyingDB().Statement.Context,
		qCtx.EmployeeORM.UnderlyingDB().Statement.Context,
		qCtx.EmployeePayrollRunORM.UnderlyingDB().Statement.Context,
		qCtx.EmployerBenefitsORM.UnderlyingDB().Statement.Context,
		qCtx.EmployerPayrollRunORM.UnderlyingDB().Statement.Context,
		qCtx.ExpenseLineORM.UnderlyingDB().Statement.Context,
		qCtx.ExpenseORM.UnderlyingDB().Statement.Context,
		qCtx.GroupORM.UnderlyingDB().Statement.Context,
		qCtx.HrisIntegrationMergeLinkORM.UnderlyingDB().Statement.Context,
		qCtx.HrisLinkedAccountORM.UnderlyingDB().Statement.Context,
		qCtx.IncomeStatementORM.UnderlyingDB().Statement.Context,
		qCtx.InvoiceLineItemORM.UnderlyingDB().Statement.Context,
		qCtx.InvoiceORM.UnderlyingDB().Statement.Context,
		qCtx.ItemORM.UnderlyingDB().Statement.Context,
		qCtx.JournalEntryORM.UnderlyingDB().Statement.Context,
		qCtx.JournalLineORM.UnderlyingDB().Statement.Context,
		qCtx.LinkedAccountingAccountORM.UnderlyingDB().Statement.Context,
		qCtx.LocationAddressORM.UnderlyingDB().Statement.Context,
		qCtx.MergeBusinessProfileORM.UnderlyingDB().Statement.Context,
		qCtx.MergeLinkedAccountTokenORM.UnderlyingDB().Statement.Context,
		qCtx.PaymentLineItemORM.UnderlyingDB().Statement.Context,
		qCtx.PaymentORM.UnderlyingDB().Statement.Context,
		qCtx.PurchaseOrderLineItemORM.UnderlyingDB().Statement.Context,
		qCtx.PurchaseOrderORM.UnderlyingDB().Statement.Context,
		qCtx.ReportItemORM.UnderlyingDB().Statement.Context,
		qCtx.TaxORM.UnderlyingDB().Statement.Context,
		qCtx.TaxRateORM.UnderlyingDB().Statement.Context,
		qCtx.TimeOffORM.UnderlyingDB().Statement.Context,
		qCtx.TrackingCategoryORM.UnderlyingDB().Statement.Context,
		qCtx.TransactionLineItemORM.UnderlyingDB().Statement.Context,
		qCtx.VendorCreditLineORM.UnderlyingDB().Statement.Context,
		qCtx.VendorCreditORM.UnderlyingDB().Statement.Context,
	} {
		if v := ctx.Value(key); v != value {
			t.Errorf("get value from context fail, expect %q, got %q", value, v)
		}
	}
}

func Test_Transaction(t *testing.T) {
	query := Use(db)
	if !query.Available() {
		t.Errorf("query Use(db) fail: query.Available() == false")
	}

	err := query.Transaction(func(tx *Query) error { return nil })
	if err != nil {
		t.Errorf("query.Transaction execute fail: %s", err)
	}

	tx := query.Begin()

	err = tx.SavePoint("point")
	if err != nil {
		t.Errorf("query tx SavePoint fail: %s", err)
	}
	err = tx.RollbackTo("point")
	if err != nil {
		t.Errorf("query tx RollbackTo fail: %s", err)
	}
	err = tx.Commit()
	if err != nil {
		t.Errorf("query tx Commit fail: %s", err)
	}

	err = query.Begin().Rollback()
	if err != nil {
		t.Errorf("query tx Rollback fail: %s", err)
	}
}
