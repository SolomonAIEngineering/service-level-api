// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"
	"strings"

	financial_servicev1 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/financial_service/v1"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"
	"gorm.io/gen/helper"

	"gorm.io/plugin/dbresolver"
)

func newInvestmentAccountORM(db *gorm.DB, opts ...gen.DOOption) investmentAccountORM {
	_investmentAccountORM := investmentAccountORM{}

	_investmentAccountORM.investmentAccountORMDo.UseDB(db, opts...)
	_investmentAccountORM.investmentAccountORMDo.UseModel(&financial_servicev1.InvestmentAccountORM{})

	tableName := _investmentAccountORM.investmentAccountORMDo.TableName()
	_investmentAccountORM.ALL = field.NewAsterisk(tableName)
	_investmentAccountORM.Balance = field.NewFloat32(tableName, "balance")
	_investmentAccountORM.BalanceLimit = field.NewUint64(tableName, "balance_limit")
	_investmentAccountORM.CurrentFunds = field.NewFloat64(tableName, "current_funds")
	_investmentAccountORM.Id = field.NewUint64(tableName, "id")
	_investmentAccountORM.LinkId = field.NewUint64(tableName, "link_id")
	_investmentAccountORM.Name = field.NewString(tableName, "name")
	_investmentAccountORM.Number = field.NewString(tableName, "number")
	_investmentAccountORM.PlaidAccountId = field.NewString(tableName, "plaid_account_id")
	_investmentAccountORM.Status = field.NewString(tableName, "status")
	_investmentAccountORM.Subtype = field.NewString(tableName, "subtype")
	_investmentAccountORM.Type = field.NewString(tableName, "type")
	_investmentAccountORM.UserId = field.NewUint64(tableName, "user_id")
	_investmentAccountORM.Holdings = investmentAccountORMHasManyHoldings{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Holdings", "financial_servicev1.InvesmentHoldingORM"),
	}

	_investmentAccountORM.Securities = investmentAccountORMHasManySecurities{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Securities", "financial_servicev1.InvestmentSecurityORM"),
	}

	_investmentAccountORM.Transactions = investmentAccountORMHasManyTransactions{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Transactions", "financial_servicev1.PlaidAccountInvestmentTransactionORM"),
		Notes: struct {
			field.RelationField
		}{
			RelationField: field.NewRelation("Transactions.Notes", "financial_servicev1.SmartNoteORM"),
		},
	}

	_investmentAccountORM.fillFieldMap()

	return _investmentAccountORM
}

type investmentAccountORM struct {
	investmentAccountORMDo

	ALL            field.Asterisk
	Balance        field.Float32
	BalanceLimit   field.Uint64
	CurrentFunds   field.Float64
	Id             field.Uint64
	LinkId         field.Uint64
	Name           field.String
	Number         field.String
	PlaidAccountId field.String
	Status         field.String
	Subtype        field.String
	Type           field.String
	UserId         field.Uint64
	Holdings       investmentAccountORMHasManyHoldings

	Securities investmentAccountORMHasManySecurities

	Transactions investmentAccountORMHasManyTransactions

	fieldMap map[string]field.Expr
}

func (i investmentAccountORM) Table(newTableName string) *investmentAccountORM {
	i.investmentAccountORMDo.UseTable(newTableName)
	return i.updateTableName(newTableName)
}

func (i investmentAccountORM) As(alias string) *investmentAccountORM {
	i.investmentAccountORMDo.DO = *(i.investmentAccountORMDo.As(alias).(*gen.DO))
	return i.updateTableName(alias)
}

func (i *investmentAccountORM) updateTableName(table string) *investmentAccountORM {
	i.ALL = field.NewAsterisk(table)
	i.Balance = field.NewFloat32(table, "balance")
	i.BalanceLimit = field.NewUint64(table, "balance_limit")
	i.CurrentFunds = field.NewFloat64(table, "current_funds")
	i.Id = field.NewUint64(table, "id")
	i.LinkId = field.NewUint64(table, "link_id")
	i.Name = field.NewString(table, "name")
	i.Number = field.NewString(table, "number")
	i.PlaidAccountId = field.NewString(table, "plaid_account_id")
	i.Status = field.NewString(table, "status")
	i.Subtype = field.NewString(table, "subtype")
	i.Type = field.NewString(table, "type")
	i.UserId = field.NewUint64(table, "user_id")

	i.fillFieldMap()

	return i
}

func (i *investmentAccountORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := i.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (i *investmentAccountORM) fillFieldMap() {
	i.fieldMap = make(map[string]field.Expr, 15)
	i.fieldMap["balance"] = i.Balance
	i.fieldMap["balance_limit"] = i.BalanceLimit
	i.fieldMap["current_funds"] = i.CurrentFunds
	i.fieldMap["id"] = i.Id
	i.fieldMap["link_id"] = i.LinkId
	i.fieldMap["name"] = i.Name
	i.fieldMap["number"] = i.Number
	i.fieldMap["plaid_account_id"] = i.PlaidAccountId
	i.fieldMap["status"] = i.Status
	i.fieldMap["subtype"] = i.Subtype
	i.fieldMap["type"] = i.Type
	i.fieldMap["user_id"] = i.UserId

}

func (i investmentAccountORM) clone(db *gorm.DB) investmentAccountORM {
	i.investmentAccountORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return i
}

func (i investmentAccountORM) replaceDB(db *gorm.DB) investmentAccountORM {
	i.investmentAccountORMDo.ReplaceDB(db)
	return i
}

type investmentAccountORMHasManyHoldings struct {
	db *gorm.DB

	field.RelationField
}

func (a investmentAccountORMHasManyHoldings) Where(conds ...field.Expr) *investmentAccountORMHasManyHoldings {
	if len(conds) == 0 {
		return &a
	}

	exprs := make([]clause.Expression, 0, len(conds))
	for _, cond := range conds {
		exprs = append(exprs, cond.BeCond().(clause.Expression))
	}
	a.db = a.db.Clauses(clause.Where{Exprs: exprs})
	return &a
}

func (a investmentAccountORMHasManyHoldings) WithContext(ctx context.Context) *investmentAccountORMHasManyHoldings {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a investmentAccountORMHasManyHoldings) Session(session *gorm.Session) *investmentAccountORMHasManyHoldings {
	a.db = a.db.Session(session)
	return &a
}

func (a investmentAccountORMHasManyHoldings) Model(m *financial_servicev1.InvestmentAccountORM) *investmentAccountORMHasManyHoldingsTx {
	return &investmentAccountORMHasManyHoldingsTx{a.db.Model(m).Association(a.Name())}
}

type investmentAccountORMHasManyHoldingsTx struct{ tx *gorm.Association }

func (a investmentAccountORMHasManyHoldingsTx) Find() (result []*financial_servicev1.InvesmentHoldingORM, err error) {
	return result, a.tx.Find(&result)
}

func (a investmentAccountORMHasManyHoldingsTx) Append(values ...*financial_servicev1.InvesmentHoldingORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a investmentAccountORMHasManyHoldingsTx) Replace(values ...*financial_servicev1.InvesmentHoldingORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a investmentAccountORMHasManyHoldingsTx) Delete(values ...*financial_servicev1.InvesmentHoldingORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a investmentAccountORMHasManyHoldingsTx) Clear() error {
	return a.tx.Clear()
}

func (a investmentAccountORMHasManyHoldingsTx) Count() int64 {
	return a.tx.Count()
}

type investmentAccountORMHasManySecurities struct {
	db *gorm.DB

	field.RelationField
}

func (a investmentAccountORMHasManySecurities) Where(conds ...field.Expr) *investmentAccountORMHasManySecurities {
	if len(conds) == 0 {
		return &a
	}

	exprs := make([]clause.Expression, 0, len(conds))
	for _, cond := range conds {
		exprs = append(exprs, cond.BeCond().(clause.Expression))
	}
	a.db = a.db.Clauses(clause.Where{Exprs: exprs})
	return &a
}

func (a investmentAccountORMHasManySecurities) WithContext(ctx context.Context) *investmentAccountORMHasManySecurities {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a investmentAccountORMHasManySecurities) Session(session *gorm.Session) *investmentAccountORMHasManySecurities {
	a.db = a.db.Session(session)
	return &a
}

func (a investmentAccountORMHasManySecurities) Model(m *financial_servicev1.InvestmentAccountORM) *investmentAccountORMHasManySecuritiesTx {
	return &investmentAccountORMHasManySecuritiesTx{a.db.Model(m).Association(a.Name())}
}

type investmentAccountORMHasManySecuritiesTx struct{ tx *gorm.Association }

func (a investmentAccountORMHasManySecuritiesTx) Find() (result []*financial_servicev1.InvestmentSecurityORM, err error) {
	return result, a.tx.Find(&result)
}

func (a investmentAccountORMHasManySecuritiesTx) Append(values ...*financial_servicev1.InvestmentSecurityORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a investmentAccountORMHasManySecuritiesTx) Replace(values ...*financial_servicev1.InvestmentSecurityORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a investmentAccountORMHasManySecuritiesTx) Delete(values ...*financial_servicev1.InvestmentSecurityORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a investmentAccountORMHasManySecuritiesTx) Clear() error {
	return a.tx.Clear()
}

func (a investmentAccountORMHasManySecuritiesTx) Count() int64 {
	return a.tx.Count()
}

type investmentAccountORMHasManyTransactions struct {
	db *gorm.DB

	field.RelationField

	Notes struct {
		field.RelationField
	}
}

func (a investmentAccountORMHasManyTransactions) Where(conds ...field.Expr) *investmentAccountORMHasManyTransactions {
	if len(conds) == 0 {
		return &a
	}

	exprs := make([]clause.Expression, 0, len(conds))
	for _, cond := range conds {
		exprs = append(exprs, cond.BeCond().(clause.Expression))
	}
	a.db = a.db.Clauses(clause.Where{Exprs: exprs})
	return &a
}

func (a investmentAccountORMHasManyTransactions) WithContext(ctx context.Context) *investmentAccountORMHasManyTransactions {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a investmentAccountORMHasManyTransactions) Session(session *gorm.Session) *investmentAccountORMHasManyTransactions {
	a.db = a.db.Session(session)
	return &a
}

func (a investmentAccountORMHasManyTransactions) Model(m *financial_servicev1.InvestmentAccountORM) *investmentAccountORMHasManyTransactionsTx {
	return &investmentAccountORMHasManyTransactionsTx{a.db.Model(m).Association(a.Name())}
}

type investmentAccountORMHasManyTransactionsTx struct{ tx *gorm.Association }

func (a investmentAccountORMHasManyTransactionsTx) Find() (result []*financial_servicev1.PlaidAccountInvestmentTransactionORM, err error) {
	return result, a.tx.Find(&result)
}

func (a investmentAccountORMHasManyTransactionsTx) Append(values ...*financial_servicev1.PlaidAccountInvestmentTransactionORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a investmentAccountORMHasManyTransactionsTx) Replace(values ...*financial_servicev1.PlaidAccountInvestmentTransactionORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a investmentAccountORMHasManyTransactionsTx) Delete(values ...*financial_servicev1.PlaidAccountInvestmentTransactionORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a investmentAccountORMHasManyTransactionsTx) Clear() error {
	return a.tx.Clear()
}

func (a investmentAccountORMHasManyTransactionsTx) Count() int64 {
	return a.tx.Count()
}

type investmentAccountORMDo struct{ gen.DO }

type IInvestmentAccountORMDo interface {
	gen.SubQuery
	Debug() IInvestmentAccountORMDo
	WithContext(ctx context.Context) IInvestmentAccountORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IInvestmentAccountORMDo
	WriteDB() IInvestmentAccountORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IInvestmentAccountORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IInvestmentAccountORMDo
	Not(conds ...gen.Condition) IInvestmentAccountORMDo
	Or(conds ...gen.Condition) IInvestmentAccountORMDo
	Select(conds ...field.Expr) IInvestmentAccountORMDo
	Where(conds ...gen.Condition) IInvestmentAccountORMDo
	Order(conds ...field.Expr) IInvestmentAccountORMDo
	Distinct(cols ...field.Expr) IInvestmentAccountORMDo
	Omit(cols ...field.Expr) IInvestmentAccountORMDo
	Join(table schema.Tabler, on ...field.Expr) IInvestmentAccountORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IInvestmentAccountORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IInvestmentAccountORMDo
	Group(cols ...field.Expr) IInvestmentAccountORMDo
	Having(conds ...gen.Condition) IInvestmentAccountORMDo
	Limit(limit int) IInvestmentAccountORMDo
	Offset(offset int) IInvestmentAccountORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IInvestmentAccountORMDo
	Unscoped() IInvestmentAccountORMDo
	Create(values ...*financial_servicev1.InvestmentAccountORM) error
	CreateInBatches(values []*financial_servicev1.InvestmentAccountORM, batchSize int) error
	Save(values ...*financial_servicev1.InvestmentAccountORM) error
	First() (*financial_servicev1.InvestmentAccountORM, error)
	Take() (*financial_servicev1.InvestmentAccountORM, error)
	Last() (*financial_servicev1.InvestmentAccountORM, error)
	Find() ([]*financial_servicev1.InvestmentAccountORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.InvestmentAccountORM, err error)
	FindInBatches(result *[]*financial_servicev1.InvestmentAccountORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*financial_servicev1.InvestmentAccountORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IInvestmentAccountORMDo
	Assign(attrs ...field.AssignExpr) IInvestmentAccountORMDo
	Joins(fields ...field.RelationField) IInvestmentAccountORMDo
	Preload(fields ...field.RelationField) IInvestmentAccountORMDo
	FirstOrInit() (*financial_servicev1.InvestmentAccountORM, error)
	FirstOrCreate() (*financial_servicev1.InvestmentAccountORM, error)
	FindByPage(offset int, limit int) (result []*financial_servicev1.InvestmentAccountORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IInvestmentAccountORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result financial_servicev1.InvestmentAccountORM, err error)
	GetRecordByIDs(ids []int) (result []financial_servicev1.InvestmentAccountORM, err error)
	CreateRecord(item financial_servicev1.InvestmentAccountORM) (err error)
	UpdateRecordByID(id int, item financial_servicev1.InvestmentAccountORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.InvestmentAccountORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result financial_servicev1.InvestmentAccountORM, err error)
	GetByIDs(ids []uint64) (result []financial_servicev1.InvestmentAccountORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (i investmentAccountORMDo) GetRecordByID(id int) (result financial_servicev1.InvestmentAccountORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM investment_accounts ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (i investmentAccountORMDo) GetRecordByIDs(ids []int) (result []financial_servicev1.InvestmentAccountORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM investment_accounts ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (i investmentAccountORMDo) CreateRecord(item financial_servicev1.InvestmentAccountORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO investment_accounts (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (i investmentAccountORMDo) UpdateRecordByID(id int, item financial_servicev1.InvestmentAccountORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE investment_accounts SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (i investmentAccountORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM investment_accounts ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (i investmentAccountORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.InvestmentAccountORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM investment_accounts ORDER BY " + i.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (i investmentAccountORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM investment_accounts ")

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (i investmentAccountORMDo) GetByID(id uint64) (result financial_servicev1.InvestmentAccountORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM investment_accounts ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (i investmentAccountORMDo) GetByIDs(ids []uint64) (result []financial_servicev1.InvestmentAccountORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM investment_accounts ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (i investmentAccountORMDo) Debug() IInvestmentAccountORMDo {
	return i.withDO(i.DO.Debug())
}

func (i investmentAccountORMDo) WithContext(ctx context.Context) IInvestmentAccountORMDo {
	return i.withDO(i.DO.WithContext(ctx))
}

func (i investmentAccountORMDo) ReadDB() IInvestmentAccountORMDo {
	return i.Clauses(dbresolver.Read)
}

func (i investmentAccountORMDo) WriteDB() IInvestmentAccountORMDo {
	return i.Clauses(dbresolver.Write)
}

func (i investmentAccountORMDo) Session(config *gorm.Session) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Session(config))
}

func (i investmentAccountORMDo) Clauses(conds ...clause.Expression) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Clauses(conds...))
}

func (i investmentAccountORMDo) Returning(value interface{}, columns ...string) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Returning(value, columns...))
}

func (i investmentAccountORMDo) Not(conds ...gen.Condition) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Not(conds...))
}

func (i investmentAccountORMDo) Or(conds ...gen.Condition) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Or(conds...))
}

func (i investmentAccountORMDo) Select(conds ...field.Expr) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Select(conds...))
}

func (i investmentAccountORMDo) Where(conds ...gen.Condition) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Where(conds...))
}

func (i investmentAccountORMDo) Order(conds ...field.Expr) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Order(conds...))
}

func (i investmentAccountORMDo) Distinct(cols ...field.Expr) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Distinct(cols...))
}

func (i investmentAccountORMDo) Omit(cols ...field.Expr) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Omit(cols...))
}

func (i investmentAccountORMDo) Join(table schema.Tabler, on ...field.Expr) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Join(table, on...))
}

func (i investmentAccountORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IInvestmentAccountORMDo {
	return i.withDO(i.DO.LeftJoin(table, on...))
}

func (i investmentAccountORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IInvestmentAccountORMDo {
	return i.withDO(i.DO.RightJoin(table, on...))
}

func (i investmentAccountORMDo) Group(cols ...field.Expr) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Group(cols...))
}

func (i investmentAccountORMDo) Having(conds ...gen.Condition) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Having(conds...))
}

func (i investmentAccountORMDo) Limit(limit int) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Limit(limit))
}

func (i investmentAccountORMDo) Offset(offset int) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Offset(offset))
}

func (i investmentAccountORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Scopes(funcs...))
}

func (i investmentAccountORMDo) Unscoped() IInvestmentAccountORMDo {
	return i.withDO(i.DO.Unscoped())
}

func (i investmentAccountORMDo) Create(values ...*financial_servicev1.InvestmentAccountORM) error {
	if len(values) == 0 {
		return nil
	}
	return i.DO.Create(values)
}

func (i investmentAccountORMDo) CreateInBatches(values []*financial_servicev1.InvestmentAccountORM, batchSize int) error {
	return i.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (i investmentAccountORMDo) Save(values ...*financial_servicev1.InvestmentAccountORM) error {
	if len(values) == 0 {
		return nil
	}
	return i.DO.Save(values)
}

func (i investmentAccountORMDo) First() (*financial_servicev1.InvestmentAccountORM, error) {
	if result, err := i.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.InvestmentAccountORM), nil
	}
}

func (i investmentAccountORMDo) Take() (*financial_servicev1.InvestmentAccountORM, error) {
	if result, err := i.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.InvestmentAccountORM), nil
	}
}

func (i investmentAccountORMDo) Last() (*financial_servicev1.InvestmentAccountORM, error) {
	if result, err := i.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.InvestmentAccountORM), nil
	}
}

func (i investmentAccountORMDo) Find() ([]*financial_servicev1.InvestmentAccountORM, error) {
	result, err := i.DO.Find()
	return result.([]*financial_servicev1.InvestmentAccountORM), err
}

func (i investmentAccountORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.InvestmentAccountORM, err error) {
	buf := make([]*financial_servicev1.InvestmentAccountORM, 0, batchSize)
	err = i.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (i investmentAccountORMDo) FindInBatches(result *[]*financial_servicev1.InvestmentAccountORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return i.DO.FindInBatches(result, batchSize, fc)
}

func (i investmentAccountORMDo) Attrs(attrs ...field.AssignExpr) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Attrs(attrs...))
}

func (i investmentAccountORMDo) Assign(attrs ...field.AssignExpr) IInvestmentAccountORMDo {
	return i.withDO(i.DO.Assign(attrs...))
}

func (i investmentAccountORMDo) Joins(fields ...field.RelationField) IInvestmentAccountORMDo {
	for _, _f := range fields {
		i = *i.withDO(i.DO.Joins(_f))
	}
	return &i
}

func (i investmentAccountORMDo) Preload(fields ...field.RelationField) IInvestmentAccountORMDo {
	for _, _f := range fields {
		i = *i.withDO(i.DO.Preload(_f))
	}
	return &i
}

func (i investmentAccountORMDo) FirstOrInit() (*financial_servicev1.InvestmentAccountORM, error) {
	if result, err := i.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.InvestmentAccountORM), nil
	}
}

func (i investmentAccountORMDo) FirstOrCreate() (*financial_servicev1.InvestmentAccountORM, error) {
	if result, err := i.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.InvestmentAccountORM), nil
	}
}

func (i investmentAccountORMDo) FindByPage(offset int, limit int) (result []*financial_servicev1.InvestmentAccountORM, count int64, err error) {
	result, err = i.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = i.Offset(-1).Limit(-1).Count()
	return
}

func (i investmentAccountORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = i.Count()
	if err != nil {
		return
	}

	err = i.Offset(offset).Limit(limit).Scan(result)
	return
}

func (i investmentAccountORMDo) Scan(result interface{}) (err error) {
	return i.DO.Scan(result)
}

func (i investmentAccountORMDo) Delete(models ...*financial_servicev1.InvestmentAccountORM) (result gen.ResultInfo, err error) {
	return i.DO.Delete(models)
}

func (i *investmentAccountORMDo) withDO(do gen.Dao) *investmentAccountORMDo {
	i.DO = *do.(*gen.DO)
	return i
}
