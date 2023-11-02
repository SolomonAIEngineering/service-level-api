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

func newSmartNoteORM(db *gorm.DB, opts ...gen.DOOption) smartNoteORM {
	_smartNoteORM := smartNoteORM{}

	_smartNoteORM.smartNoteORMDo.UseDB(db, opts...)
	_smartNoteORM.smartNoteORMDo.UseModel(&financial_servicev1.SmartNoteORM{})

	tableName := _smartNoteORM.smartNoteORMDo.TableName()
	_smartNoteORM.ALL = field.NewAsterisk(tableName)
	_smartNoteORM.Content = field.NewString(tableName, "content")
	_smartNoteORM.CreatedAt = field.NewTime(tableName, "created_at")
	_smartNoteORM.Id = field.NewUint64(tableName, "id")
	_smartNoteORM.SmartGoalId = field.NewUint64(tableName, "smart_goal_id")
	_smartNoteORM.UpdatedAt = field.NewTime(tableName, "updated_at")
	_smartNoteORM.UserId = field.NewUint64(tableName, "user_id")

	_smartNoteORM.fillFieldMap()

	return _smartNoteORM
}

type smartNoteORM struct {
	smartNoteORMDo

	ALL         field.Asterisk
	Content     field.String
	CreatedAt   field.Time
	Id          field.Uint64
	SmartGoalId field.Uint64
	UpdatedAt   field.Time
	UserId      field.Uint64

	fieldMap map[string]field.Expr
}

func (s smartNoteORM) Table(newTableName string) *smartNoteORM {
	s.smartNoteORMDo.UseTable(newTableName)
	return s.updateTableName(newTableName)
}

func (s smartNoteORM) As(alias string) *smartNoteORM {
	s.smartNoteORMDo.DO = *(s.smartNoteORMDo.As(alias).(*gen.DO))
	return s.updateTableName(alias)
}

func (s *smartNoteORM) updateTableName(table string) *smartNoteORM {
	s.ALL = field.NewAsterisk(table)
	s.Content = field.NewString(table, "content")
	s.CreatedAt = field.NewTime(table, "created_at")
	s.Id = field.NewUint64(table, "id")
	s.SmartGoalId = field.NewUint64(table, "smart_goal_id")
	s.UpdatedAt = field.NewTime(table, "updated_at")
	s.UserId = field.NewUint64(table, "user_id")

	s.fillFieldMap()

	return s
}

func (s *smartNoteORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := s.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (s *smartNoteORM) fillFieldMap() {
	s.fieldMap = make(map[string]field.Expr, 6)
	s.fieldMap["content"] = s.Content
	s.fieldMap["created_at"] = s.CreatedAt
	s.fieldMap["id"] = s.Id
	s.fieldMap["smart_goal_id"] = s.SmartGoalId
	s.fieldMap["updated_at"] = s.UpdatedAt
	s.fieldMap["user_id"] = s.UserId
}

func (s smartNoteORM) clone(db *gorm.DB) smartNoteORM {
	s.smartNoteORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return s
}

func (s smartNoteORM) replaceDB(db *gorm.DB) smartNoteORM {
	s.smartNoteORMDo.ReplaceDB(db)
	return s
}

type smartNoteORMDo struct{ gen.DO }

type ISmartNoteORMDo interface {
	gen.SubQuery
	Debug() ISmartNoteORMDo
	WithContext(ctx context.Context) ISmartNoteORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() ISmartNoteORMDo
	WriteDB() ISmartNoteORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) ISmartNoteORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) ISmartNoteORMDo
	Not(conds ...gen.Condition) ISmartNoteORMDo
	Or(conds ...gen.Condition) ISmartNoteORMDo
	Select(conds ...field.Expr) ISmartNoteORMDo
	Where(conds ...gen.Condition) ISmartNoteORMDo
	Order(conds ...field.Expr) ISmartNoteORMDo
	Distinct(cols ...field.Expr) ISmartNoteORMDo
	Omit(cols ...field.Expr) ISmartNoteORMDo
	Join(table schema.Tabler, on ...field.Expr) ISmartNoteORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) ISmartNoteORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) ISmartNoteORMDo
	Group(cols ...field.Expr) ISmartNoteORMDo
	Having(conds ...gen.Condition) ISmartNoteORMDo
	Limit(limit int) ISmartNoteORMDo
	Offset(offset int) ISmartNoteORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) ISmartNoteORMDo
	Unscoped() ISmartNoteORMDo
	Create(values ...*financial_servicev1.SmartNoteORM) error
	CreateInBatches(values []*financial_servicev1.SmartNoteORM, batchSize int) error
	Save(values ...*financial_servicev1.SmartNoteORM) error
	First() (*financial_servicev1.SmartNoteORM, error)
	Take() (*financial_servicev1.SmartNoteORM, error)
	Last() (*financial_servicev1.SmartNoteORM, error)
	Find() ([]*financial_servicev1.SmartNoteORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.SmartNoteORM, err error)
	FindInBatches(result *[]*financial_servicev1.SmartNoteORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*financial_servicev1.SmartNoteORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) ISmartNoteORMDo
	Assign(attrs ...field.AssignExpr) ISmartNoteORMDo
	Joins(fields ...field.RelationField) ISmartNoteORMDo
	Preload(fields ...field.RelationField) ISmartNoteORMDo
	FirstOrInit() (*financial_servicev1.SmartNoteORM, error)
	FirstOrCreate() (*financial_servicev1.SmartNoteORM, error)
	FindByPage(offset int, limit int) (result []*financial_servicev1.SmartNoteORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) ISmartNoteORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result financial_servicev1.SmartNoteORM, err error)
	GetRecordByIDs(ids []int) (result []financial_servicev1.SmartNoteORM, err error)
	CreateRecord(item financial_servicev1.SmartNoteORM) (err error)
	UpdateRecordByID(id int, item financial_servicev1.SmartNoteORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.SmartNoteORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result financial_servicev1.SmartNoteORM, err error)
	GetByIDs(ids []uint64) (result []financial_servicev1.SmartNoteORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (s smartNoteORMDo) GetRecordByID(id int) (result financial_servicev1.SmartNoteORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM smart_notes ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (s smartNoteORMDo) GetRecordByIDs(ids []int) (result []financial_servicev1.SmartNoteORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM smart_notes ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (s smartNoteORMDo) CreateRecord(item financial_servicev1.SmartNoteORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO smart_notes (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (s smartNoteORMDo) UpdateRecordByID(id int, item financial_servicev1.SmartNoteORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE smart_notes SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (s smartNoteORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM smart_notes ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (s smartNoteORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.SmartNoteORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM smart_notes ORDER BY " + s.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (s smartNoteORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM smart_notes ")

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (s smartNoteORMDo) GetByID(id uint64) (result financial_servicev1.SmartNoteORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM smart_notes ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (s smartNoteORMDo) GetByIDs(ids []uint64) (result []financial_servicev1.SmartNoteORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM smart_notes ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (s smartNoteORMDo) Debug() ISmartNoteORMDo {
	return s.withDO(s.DO.Debug())
}

func (s smartNoteORMDo) WithContext(ctx context.Context) ISmartNoteORMDo {
	return s.withDO(s.DO.WithContext(ctx))
}

func (s smartNoteORMDo) ReadDB() ISmartNoteORMDo {
	return s.Clauses(dbresolver.Read)
}

func (s smartNoteORMDo) WriteDB() ISmartNoteORMDo {
	return s.Clauses(dbresolver.Write)
}

func (s smartNoteORMDo) Session(config *gorm.Session) ISmartNoteORMDo {
	return s.withDO(s.DO.Session(config))
}

func (s smartNoteORMDo) Clauses(conds ...clause.Expression) ISmartNoteORMDo {
	return s.withDO(s.DO.Clauses(conds...))
}

func (s smartNoteORMDo) Returning(value interface{}, columns ...string) ISmartNoteORMDo {
	return s.withDO(s.DO.Returning(value, columns...))
}

func (s smartNoteORMDo) Not(conds ...gen.Condition) ISmartNoteORMDo {
	return s.withDO(s.DO.Not(conds...))
}

func (s smartNoteORMDo) Or(conds ...gen.Condition) ISmartNoteORMDo {
	return s.withDO(s.DO.Or(conds...))
}

func (s smartNoteORMDo) Select(conds ...field.Expr) ISmartNoteORMDo {
	return s.withDO(s.DO.Select(conds...))
}

func (s smartNoteORMDo) Where(conds ...gen.Condition) ISmartNoteORMDo {
	return s.withDO(s.DO.Where(conds...))
}

func (s smartNoteORMDo) Order(conds ...field.Expr) ISmartNoteORMDo {
	return s.withDO(s.DO.Order(conds...))
}

func (s smartNoteORMDo) Distinct(cols ...field.Expr) ISmartNoteORMDo {
	return s.withDO(s.DO.Distinct(cols...))
}

func (s smartNoteORMDo) Omit(cols ...field.Expr) ISmartNoteORMDo {
	return s.withDO(s.DO.Omit(cols...))
}

func (s smartNoteORMDo) Join(table schema.Tabler, on ...field.Expr) ISmartNoteORMDo {
	return s.withDO(s.DO.Join(table, on...))
}

func (s smartNoteORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) ISmartNoteORMDo {
	return s.withDO(s.DO.LeftJoin(table, on...))
}

func (s smartNoteORMDo) RightJoin(table schema.Tabler, on ...field.Expr) ISmartNoteORMDo {
	return s.withDO(s.DO.RightJoin(table, on...))
}

func (s smartNoteORMDo) Group(cols ...field.Expr) ISmartNoteORMDo {
	return s.withDO(s.DO.Group(cols...))
}

func (s smartNoteORMDo) Having(conds ...gen.Condition) ISmartNoteORMDo {
	return s.withDO(s.DO.Having(conds...))
}

func (s smartNoteORMDo) Limit(limit int) ISmartNoteORMDo {
	return s.withDO(s.DO.Limit(limit))
}

func (s smartNoteORMDo) Offset(offset int) ISmartNoteORMDo {
	return s.withDO(s.DO.Offset(offset))
}

func (s smartNoteORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) ISmartNoteORMDo {
	return s.withDO(s.DO.Scopes(funcs...))
}

func (s smartNoteORMDo) Unscoped() ISmartNoteORMDo {
	return s.withDO(s.DO.Unscoped())
}

func (s smartNoteORMDo) Create(values ...*financial_servicev1.SmartNoteORM) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Create(values)
}

func (s smartNoteORMDo) CreateInBatches(values []*financial_servicev1.SmartNoteORM, batchSize int) error {
	return s.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (s smartNoteORMDo) Save(values ...*financial_servicev1.SmartNoteORM) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Save(values)
}

func (s smartNoteORMDo) First() (*financial_servicev1.SmartNoteORM, error) {
	if result, err := s.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.SmartNoteORM), nil
	}
}

func (s smartNoteORMDo) Take() (*financial_servicev1.SmartNoteORM, error) {
	if result, err := s.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.SmartNoteORM), nil
	}
}

func (s smartNoteORMDo) Last() (*financial_servicev1.SmartNoteORM, error) {
	if result, err := s.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.SmartNoteORM), nil
	}
}

func (s smartNoteORMDo) Find() ([]*financial_servicev1.SmartNoteORM, error) {
	result, err := s.DO.Find()
	return result.([]*financial_servicev1.SmartNoteORM), err
}

func (s smartNoteORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.SmartNoteORM, err error) {
	buf := make([]*financial_servicev1.SmartNoteORM, 0, batchSize)
	err = s.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (s smartNoteORMDo) FindInBatches(result *[]*financial_servicev1.SmartNoteORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return s.DO.FindInBatches(result, batchSize, fc)
}

func (s smartNoteORMDo) Attrs(attrs ...field.AssignExpr) ISmartNoteORMDo {
	return s.withDO(s.DO.Attrs(attrs...))
}

func (s smartNoteORMDo) Assign(attrs ...field.AssignExpr) ISmartNoteORMDo {
	return s.withDO(s.DO.Assign(attrs...))
}

func (s smartNoteORMDo) Joins(fields ...field.RelationField) ISmartNoteORMDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Joins(_f))
	}
	return &s
}

func (s smartNoteORMDo) Preload(fields ...field.RelationField) ISmartNoteORMDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Preload(_f))
	}
	return &s
}

func (s smartNoteORMDo) FirstOrInit() (*financial_servicev1.SmartNoteORM, error) {
	if result, err := s.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.SmartNoteORM), nil
	}
}

func (s smartNoteORMDo) FirstOrCreate() (*financial_servicev1.SmartNoteORM, error) {
	if result, err := s.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.SmartNoteORM), nil
	}
}

func (s smartNoteORMDo) FindByPage(offset int, limit int) (result []*financial_servicev1.SmartNoteORM, count int64, err error) {
	result, err = s.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = s.Offset(-1).Limit(-1).Count()
	return
}

func (s smartNoteORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = s.Count()
	if err != nil {
		return
	}

	err = s.Offset(offset).Limit(limit).Scan(result)
	return
}

func (s smartNoteORMDo) Scan(result interface{}) (err error) {
	return s.DO.Scan(result)
}

func (s smartNoteORMDo) Delete(models ...*financial_servicev1.SmartNoteORM) (result gen.ResultInfo, err error) {
	return s.DO.Delete(models)
}

func (s *smartNoteORMDo) withDO(do gen.Dao) *smartNoteORMDo {
	s.DO = *do.(*gen.DO)
	return s
}
