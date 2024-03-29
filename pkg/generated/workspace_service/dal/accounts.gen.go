// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"
	"strings"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"
	"gorm.io/gen/helper"

	"gorm.io/plugin/dbresolver"

	workspace_servicev1 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/workspace_service/v1"
)

func newAccountORM(db *gorm.DB, opts ...gen.DOOption) accountORM {
	_accountORM := accountORM{}

	_accountORM.accountORMDo.UseDB(db, opts...)
	_accountORM.accountORMDo.UseModel(&workspace_servicev1.AccountORM{})

	tableName := _accountORM.accountORMDo.TableName()
	_accountORM.ALL = field.NewAsterisk(tableName)
	_accountORM.Auth0UserId = field.NewString(tableName, "auth0_user_id")
	_accountORM.Id = field.NewUint64(tableName, "id")
	_accountORM.Workspace = accountORMHasManyWorkspace{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Workspace", "workspace_servicev1.WorkspaceORM"),
		Folders: struct {
			field.RelationField
			ChildFolder struct {
				field.RelationField
			}
			Files struct {
				field.RelationField
			}
		}{
			RelationField: field.NewRelation("Workspace.Folders", "workspace_servicev1.FolderMetadataORM"),
			ChildFolder: struct {
				field.RelationField
			}{
				RelationField: field.NewRelation("Workspace.Folders.ChildFolder", "workspace_servicev1.FolderMetadataORM"),
			},
			Files: struct {
				field.RelationField
			}{
				RelationField: field.NewRelation("Workspace.Folders.Files", "workspace_servicev1.FileMetadataORM"),
			},
		},
	}

	_accountORM.fillFieldMap()

	return _accountORM
}

type accountORM struct {
	accountORMDo

	ALL         field.Asterisk
	Auth0UserId field.String
	Id          field.Uint64
	Workspace   accountORMHasManyWorkspace

	fieldMap map[string]field.Expr
}

func (a accountORM) Table(newTableName string) *accountORM {
	a.accountORMDo.UseTable(newTableName)
	return a.updateTableName(newTableName)
}

func (a accountORM) As(alias string) *accountORM {
	a.accountORMDo.DO = *(a.accountORMDo.As(alias).(*gen.DO))
	return a.updateTableName(alias)
}

func (a *accountORM) updateTableName(table string) *accountORM {
	a.ALL = field.NewAsterisk(table)
	a.Auth0UserId = field.NewString(table, "auth0_user_id")
	a.Id = field.NewUint64(table, "id")

	a.fillFieldMap()

	return a
}

func (a *accountORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := a.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (a *accountORM) fillFieldMap() {
	a.fieldMap = make(map[string]field.Expr, 3)
	a.fieldMap["auth0_user_id"] = a.Auth0UserId
	a.fieldMap["id"] = a.Id

}

func (a accountORM) clone(db *gorm.DB) accountORM {
	a.accountORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return a
}

func (a accountORM) replaceDB(db *gorm.DB) accountORM {
	a.accountORMDo.ReplaceDB(db)
	return a
}

type accountORMHasManyWorkspace struct {
	db *gorm.DB

	field.RelationField

	Folders struct {
		field.RelationField
		ChildFolder struct {
			field.RelationField
		}
		Files struct {
			field.RelationField
		}
	}
}

func (a accountORMHasManyWorkspace) Where(conds ...field.Expr) *accountORMHasManyWorkspace {
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

func (a accountORMHasManyWorkspace) WithContext(ctx context.Context) *accountORMHasManyWorkspace {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a accountORMHasManyWorkspace) Session(session *gorm.Session) *accountORMHasManyWorkspace {
	a.db = a.db.Session(session)
	return &a
}

func (a accountORMHasManyWorkspace) Model(m *workspace_servicev1.AccountORM) *accountORMHasManyWorkspaceTx {
	return &accountORMHasManyWorkspaceTx{a.db.Model(m).Association(a.Name())}
}

type accountORMHasManyWorkspaceTx struct{ tx *gorm.Association }

func (a accountORMHasManyWorkspaceTx) Find() (result []*workspace_servicev1.WorkspaceORM, err error) {
	return result, a.tx.Find(&result)
}

func (a accountORMHasManyWorkspaceTx) Append(values ...*workspace_servicev1.WorkspaceORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a accountORMHasManyWorkspaceTx) Replace(values ...*workspace_servicev1.WorkspaceORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a accountORMHasManyWorkspaceTx) Delete(values ...*workspace_servicev1.WorkspaceORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a accountORMHasManyWorkspaceTx) Clear() error {
	return a.tx.Clear()
}

func (a accountORMHasManyWorkspaceTx) Count() int64 {
	return a.tx.Count()
}

type accountORMDo struct{ gen.DO }

type IAccountORMDo interface {
	gen.SubQuery
	Debug() IAccountORMDo
	WithContext(ctx context.Context) IAccountORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IAccountORMDo
	WriteDB() IAccountORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IAccountORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IAccountORMDo
	Not(conds ...gen.Condition) IAccountORMDo
	Or(conds ...gen.Condition) IAccountORMDo
	Select(conds ...field.Expr) IAccountORMDo
	Where(conds ...gen.Condition) IAccountORMDo
	Order(conds ...field.Expr) IAccountORMDo
	Distinct(cols ...field.Expr) IAccountORMDo
	Omit(cols ...field.Expr) IAccountORMDo
	Join(table schema.Tabler, on ...field.Expr) IAccountORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IAccountORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IAccountORMDo
	Group(cols ...field.Expr) IAccountORMDo
	Having(conds ...gen.Condition) IAccountORMDo
	Limit(limit int) IAccountORMDo
	Offset(offset int) IAccountORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IAccountORMDo
	Unscoped() IAccountORMDo
	Create(values ...*workspace_servicev1.AccountORM) error
	CreateInBatches(values []*workspace_servicev1.AccountORM, batchSize int) error
	Save(values ...*workspace_servicev1.AccountORM) error
	First() (*workspace_servicev1.AccountORM, error)
	Take() (*workspace_servicev1.AccountORM, error)
	Last() (*workspace_servicev1.AccountORM, error)
	Find() ([]*workspace_servicev1.AccountORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*workspace_servicev1.AccountORM, err error)
	FindInBatches(result *[]*workspace_servicev1.AccountORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*workspace_servicev1.AccountORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IAccountORMDo
	Assign(attrs ...field.AssignExpr) IAccountORMDo
	Joins(fields ...field.RelationField) IAccountORMDo
	Preload(fields ...field.RelationField) IAccountORMDo
	FirstOrInit() (*workspace_servicev1.AccountORM, error)
	FirstOrCreate() (*workspace_servicev1.AccountORM, error)
	FindByPage(offset int, limit int) (result []*workspace_servicev1.AccountORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IAccountORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result workspace_servicev1.AccountORM, err error)
	GetRecordByIDs(ids []int) (result []workspace_servicev1.AccountORM, err error)
	CreateRecord(item workspace_servicev1.AccountORM) (err error)
	UpdateRecordByID(id int, item workspace_servicev1.AccountORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []workspace_servicev1.AccountORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result workspace_servicev1.AccountORM, err error)
	GetByIDs(ids []uint64) (result []workspace_servicev1.AccountORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (a accountORMDo) GetRecordByID(id int) (result workspace_servicev1.AccountORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM accounts ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (a accountORMDo) GetRecordByIDs(ids []int) (result []workspace_servicev1.AccountORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM accounts ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (a accountORMDo) CreateRecord(item workspace_servicev1.AccountORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO accounts (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (a accountORMDo) UpdateRecordByID(id int, item workspace_servicev1.AccountORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE accounts SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (a accountORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM accounts ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (a accountORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []workspace_servicev1.AccountORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM accounts ORDER BY " + a.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (a accountORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM accounts ")

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (a accountORMDo) GetByID(id uint64) (result workspace_servicev1.AccountORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM accounts ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (a accountORMDo) GetByIDs(ids []uint64) (result []workspace_servicev1.AccountORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM accounts ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (a accountORMDo) Debug() IAccountORMDo {
	return a.withDO(a.DO.Debug())
}

func (a accountORMDo) WithContext(ctx context.Context) IAccountORMDo {
	return a.withDO(a.DO.WithContext(ctx))
}

func (a accountORMDo) ReadDB() IAccountORMDo {
	return a.Clauses(dbresolver.Read)
}

func (a accountORMDo) WriteDB() IAccountORMDo {
	return a.Clauses(dbresolver.Write)
}

func (a accountORMDo) Session(config *gorm.Session) IAccountORMDo {
	return a.withDO(a.DO.Session(config))
}

func (a accountORMDo) Clauses(conds ...clause.Expression) IAccountORMDo {
	return a.withDO(a.DO.Clauses(conds...))
}

func (a accountORMDo) Returning(value interface{}, columns ...string) IAccountORMDo {
	return a.withDO(a.DO.Returning(value, columns...))
}

func (a accountORMDo) Not(conds ...gen.Condition) IAccountORMDo {
	return a.withDO(a.DO.Not(conds...))
}

func (a accountORMDo) Or(conds ...gen.Condition) IAccountORMDo {
	return a.withDO(a.DO.Or(conds...))
}

func (a accountORMDo) Select(conds ...field.Expr) IAccountORMDo {
	return a.withDO(a.DO.Select(conds...))
}

func (a accountORMDo) Where(conds ...gen.Condition) IAccountORMDo {
	return a.withDO(a.DO.Where(conds...))
}

func (a accountORMDo) Order(conds ...field.Expr) IAccountORMDo {
	return a.withDO(a.DO.Order(conds...))
}

func (a accountORMDo) Distinct(cols ...field.Expr) IAccountORMDo {
	return a.withDO(a.DO.Distinct(cols...))
}

func (a accountORMDo) Omit(cols ...field.Expr) IAccountORMDo {
	return a.withDO(a.DO.Omit(cols...))
}

func (a accountORMDo) Join(table schema.Tabler, on ...field.Expr) IAccountORMDo {
	return a.withDO(a.DO.Join(table, on...))
}

func (a accountORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IAccountORMDo {
	return a.withDO(a.DO.LeftJoin(table, on...))
}

func (a accountORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IAccountORMDo {
	return a.withDO(a.DO.RightJoin(table, on...))
}

func (a accountORMDo) Group(cols ...field.Expr) IAccountORMDo {
	return a.withDO(a.DO.Group(cols...))
}

func (a accountORMDo) Having(conds ...gen.Condition) IAccountORMDo {
	return a.withDO(a.DO.Having(conds...))
}

func (a accountORMDo) Limit(limit int) IAccountORMDo {
	return a.withDO(a.DO.Limit(limit))
}

func (a accountORMDo) Offset(offset int) IAccountORMDo {
	return a.withDO(a.DO.Offset(offset))
}

func (a accountORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IAccountORMDo {
	return a.withDO(a.DO.Scopes(funcs...))
}

func (a accountORMDo) Unscoped() IAccountORMDo {
	return a.withDO(a.DO.Unscoped())
}

func (a accountORMDo) Create(values ...*workspace_servicev1.AccountORM) error {
	if len(values) == 0 {
		return nil
	}
	return a.DO.Create(values)
}

func (a accountORMDo) CreateInBatches(values []*workspace_servicev1.AccountORM, batchSize int) error {
	return a.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (a accountORMDo) Save(values ...*workspace_servicev1.AccountORM) error {
	if len(values) == 0 {
		return nil
	}
	return a.DO.Save(values)
}

func (a accountORMDo) First() (*workspace_servicev1.AccountORM, error) {
	if result, err := a.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*workspace_servicev1.AccountORM), nil
	}
}

func (a accountORMDo) Take() (*workspace_servicev1.AccountORM, error) {
	if result, err := a.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*workspace_servicev1.AccountORM), nil
	}
}

func (a accountORMDo) Last() (*workspace_servicev1.AccountORM, error) {
	if result, err := a.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*workspace_servicev1.AccountORM), nil
	}
}

func (a accountORMDo) Find() ([]*workspace_servicev1.AccountORM, error) {
	result, err := a.DO.Find()
	return result.([]*workspace_servicev1.AccountORM), err
}

func (a accountORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*workspace_servicev1.AccountORM, err error) {
	buf := make([]*workspace_servicev1.AccountORM, 0, batchSize)
	err = a.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (a accountORMDo) FindInBatches(result *[]*workspace_servicev1.AccountORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return a.DO.FindInBatches(result, batchSize, fc)
}

func (a accountORMDo) Attrs(attrs ...field.AssignExpr) IAccountORMDo {
	return a.withDO(a.DO.Attrs(attrs...))
}

func (a accountORMDo) Assign(attrs ...field.AssignExpr) IAccountORMDo {
	return a.withDO(a.DO.Assign(attrs...))
}

func (a accountORMDo) Joins(fields ...field.RelationField) IAccountORMDo {
	for _, _f := range fields {
		a = *a.withDO(a.DO.Joins(_f))
	}
	return &a
}

func (a accountORMDo) Preload(fields ...field.RelationField) IAccountORMDo {
	for _, _f := range fields {
		a = *a.withDO(a.DO.Preload(_f))
	}
	return &a
}

func (a accountORMDo) FirstOrInit() (*workspace_servicev1.AccountORM, error) {
	if result, err := a.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*workspace_servicev1.AccountORM), nil
	}
}

func (a accountORMDo) FirstOrCreate() (*workspace_servicev1.AccountORM, error) {
	if result, err := a.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*workspace_servicev1.AccountORM), nil
	}
}

func (a accountORMDo) FindByPage(offset int, limit int) (result []*workspace_servicev1.AccountORM, count int64, err error) {
	result, err = a.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = a.Offset(-1).Limit(-1).Count()
	return
}

func (a accountORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = a.Count()
	if err != nil {
		return
	}

	err = a.Offset(offset).Limit(limit).Scan(result)
	return
}

func (a accountORMDo) Scan(result interface{}) (err error) {
	return a.DO.Scan(result)
}

func (a accountORMDo) Delete(models ...*workspace_servicev1.AccountORM) (result gen.ResultInfo, err error) {
	return a.DO.Delete(models)
}

func (a *accountORMDo) withDO(do gen.Dao) *accountORMDo {
	a.DO = *do.(*gen.DO)
	return a
}
