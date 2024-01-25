// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"
	"strings"

	user_servicev1 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/user_service/v1"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"
	"gorm.io/gen/helper"

	"gorm.io/plugin/dbresolver"
)

func newDigitalWorkerSettingsORM(db *gorm.DB, opts ...gen.DOOption) digitalWorkerSettingsORM {
	_digitalWorkerSettingsORM := digitalWorkerSettingsORM{}

	_digitalWorkerSettingsORM.digitalWorkerSettingsORMDo.UseDB(db, opts...)
	_digitalWorkerSettingsORM.digitalWorkerSettingsORMDo.UseModel(&user_servicev1.DigitalWorkerSettingsORM{})

	tableName := _digitalWorkerSettingsORM.digitalWorkerSettingsORMDo.TableName()
	_digitalWorkerSettingsORM.ALL = field.NewAsterisk(tableName)
	_digitalWorkerSettingsORM.EnableLogging = field.NewBool(tableName, "enable_logging")
	_digitalWorkerSettingsORM.Id = field.NewUint64(tableName, "id")
	_digitalWorkerSettingsORM.SettingsId = field.NewUint64(tableName, "settings_id")
	_digitalWorkerSettingsORM.WorkerName = field.NewString(tableName, "worker_name")
	_digitalWorkerSettingsORM.WorkerVersion = field.NewString(tableName, "worker_version")

	_digitalWorkerSettingsORM.fillFieldMap()

	return _digitalWorkerSettingsORM
}

type digitalWorkerSettingsORM struct {
	digitalWorkerSettingsORMDo

	ALL           field.Asterisk
	EnableLogging field.Bool
	Id            field.Uint64
	SettingsId    field.Uint64
	WorkerName    field.String
	WorkerVersion field.String

	fieldMap map[string]field.Expr
}

func (d digitalWorkerSettingsORM) Table(newTableName string) *digitalWorkerSettingsORM {
	d.digitalWorkerSettingsORMDo.UseTable(newTableName)
	return d.updateTableName(newTableName)
}

func (d digitalWorkerSettingsORM) As(alias string) *digitalWorkerSettingsORM {
	d.digitalWorkerSettingsORMDo.DO = *(d.digitalWorkerSettingsORMDo.As(alias).(*gen.DO))
	return d.updateTableName(alias)
}

func (d *digitalWorkerSettingsORM) updateTableName(table string) *digitalWorkerSettingsORM {
	d.ALL = field.NewAsterisk(table)
	d.EnableLogging = field.NewBool(table, "enable_logging")
	d.Id = field.NewUint64(table, "id")
	d.SettingsId = field.NewUint64(table, "settings_id")
	d.WorkerName = field.NewString(table, "worker_name")
	d.WorkerVersion = field.NewString(table, "worker_version")

	d.fillFieldMap()

	return d
}

func (d *digitalWorkerSettingsORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := d.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (d *digitalWorkerSettingsORM) fillFieldMap() {
	d.fieldMap = make(map[string]field.Expr, 5)
	d.fieldMap["enable_logging"] = d.EnableLogging
	d.fieldMap["id"] = d.Id
	d.fieldMap["settings_id"] = d.SettingsId
	d.fieldMap["worker_name"] = d.WorkerName
	d.fieldMap["worker_version"] = d.WorkerVersion
}

func (d digitalWorkerSettingsORM) clone(db *gorm.DB) digitalWorkerSettingsORM {
	d.digitalWorkerSettingsORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return d
}

func (d digitalWorkerSettingsORM) replaceDB(db *gorm.DB) digitalWorkerSettingsORM {
	d.digitalWorkerSettingsORMDo.ReplaceDB(db)
	return d
}

type digitalWorkerSettingsORMDo struct{ gen.DO }

type IDigitalWorkerSettingsORMDo interface {
	gen.SubQuery
	Debug() IDigitalWorkerSettingsORMDo
	WithContext(ctx context.Context) IDigitalWorkerSettingsORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IDigitalWorkerSettingsORMDo
	WriteDB() IDigitalWorkerSettingsORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IDigitalWorkerSettingsORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IDigitalWorkerSettingsORMDo
	Not(conds ...gen.Condition) IDigitalWorkerSettingsORMDo
	Or(conds ...gen.Condition) IDigitalWorkerSettingsORMDo
	Select(conds ...field.Expr) IDigitalWorkerSettingsORMDo
	Where(conds ...gen.Condition) IDigitalWorkerSettingsORMDo
	Order(conds ...field.Expr) IDigitalWorkerSettingsORMDo
	Distinct(cols ...field.Expr) IDigitalWorkerSettingsORMDo
	Omit(cols ...field.Expr) IDigitalWorkerSettingsORMDo
	Join(table schema.Tabler, on ...field.Expr) IDigitalWorkerSettingsORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IDigitalWorkerSettingsORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IDigitalWorkerSettingsORMDo
	Group(cols ...field.Expr) IDigitalWorkerSettingsORMDo
	Having(conds ...gen.Condition) IDigitalWorkerSettingsORMDo
	Limit(limit int) IDigitalWorkerSettingsORMDo
	Offset(offset int) IDigitalWorkerSettingsORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IDigitalWorkerSettingsORMDo
	Unscoped() IDigitalWorkerSettingsORMDo
	Create(values ...*user_servicev1.DigitalWorkerSettingsORM) error
	CreateInBatches(values []*user_servicev1.DigitalWorkerSettingsORM, batchSize int) error
	Save(values ...*user_servicev1.DigitalWorkerSettingsORM) error
	First() (*user_servicev1.DigitalWorkerSettingsORM, error)
	Take() (*user_servicev1.DigitalWorkerSettingsORM, error)
	Last() (*user_servicev1.DigitalWorkerSettingsORM, error)
	Find() ([]*user_servicev1.DigitalWorkerSettingsORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*user_servicev1.DigitalWorkerSettingsORM, err error)
	FindInBatches(result *[]*user_servicev1.DigitalWorkerSettingsORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*user_servicev1.DigitalWorkerSettingsORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IDigitalWorkerSettingsORMDo
	Assign(attrs ...field.AssignExpr) IDigitalWorkerSettingsORMDo
	Joins(fields ...field.RelationField) IDigitalWorkerSettingsORMDo
	Preload(fields ...field.RelationField) IDigitalWorkerSettingsORMDo
	FirstOrInit() (*user_servicev1.DigitalWorkerSettingsORM, error)
	FirstOrCreate() (*user_servicev1.DigitalWorkerSettingsORM, error)
	FindByPage(offset int, limit int) (result []*user_servicev1.DigitalWorkerSettingsORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IDigitalWorkerSettingsORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result user_servicev1.DigitalWorkerSettingsORM, err error)
	GetRecordByIDs(ids []int) (result []user_servicev1.DigitalWorkerSettingsORM, err error)
	CreateRecord(item user_servicev1.DigitalWorkerSettingsORM) (err error)
	UpdateRecordByID(id int, item user_servicev1.DigitalWorkerSettingsORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []user_servicev1.DigitalWorkerSettingsORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result user_servicev1.DigitalWorkerSettingsORM, err error)
	GetByIDs(ids []uint64) (result []user_servicev1.DigitalWorkerSettingsORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (d digitalWorkerSettingsORMDo) GetRecordByID(id int) (result user_servicev1.DigitalWorkerSettingsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM digital_worker_settings ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = d.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (d digitalWorkerSettingsORMDo) GetRecordByIDs(ids []int) (result []user_servicev1.DigitalWorkerSettingsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM digital_worker_settings ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = d.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (d digitalWorkerSettingsORMDo) CreateRecord(item user_servicev1.DigitalWorkerSettingsORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO digital_worker_settings (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = d.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (d digitalWorkerSettingsORMDo) UpdateRecordByID(id int, item user_servicev1.DigitalWorkerSettingsORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE digital_worker_settings SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = d.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (d digitalWorkerSettingsORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM digital_worker_settings ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = d.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (d digitalWorkerSettingsORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []user_servicev1.DigitalWorkerSettingsORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM digital_worker_settings ORDER BY " + d.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = d.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (d digitalWorkerSettingsORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM digital_worker_settings ")

	var executeSQL *gorm.DB
	executeSQL = d.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (d digitalWorkerSettingsORMDo) GetByID(id uint64) (result user_servicev1.DigitalWorkerSettingsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM digital_worker_settings ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = d.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (d digitalWorkerSettingsORMDo) GetByIDs(ids []uint64) (result []user_servicev1.DigitalWorkerSettingsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM digital_worker_settings ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = d.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (d digitalWorkerSettingsORMDo) Debug() IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Debug())
}

func (d digitalWorkerSettingsORMDo) WithContext(ctx context.Context) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.WithContext(ctx))
}

func (d digitalWorkerSettingsORMDo) ReadDB() IDigitalWorkerSettingsORMDo {
	return d.Clauses(dbresolver.Read)
}

func (d digitalWorkerSettingsORMDo) WriteDB() IDigitalWorkerSettingsORMDo {
	return d.Clauses(dbresolver.Write)
}

func (d digitalWorkerSettingsORMDo) Session(config *gorm.Session) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Session(config))
}

func (d digitalWorkerSettingsORMDo) Clauses(conds ...clause.Expression) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Clauses(conds...))
}

func (d digitalWorkerSettingsORMDo) Returning(value interface{}, columns ...string) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Returning(value, columns...))
}

func (d digitalWorkerSettingsORMDo) Not(conds ...gen.Condition) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Not(conds...))
}

func (d digitalWorkerSettingsORMDo) Or(conds ...gen.Condition) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Or(conds...))
}

func (d digitalWorkerSettingsORMDo) Select(conds ...field.Expr) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Select(conds...))
}

func (d digitalWorkerSettingsORMDo) Where(conds ...gen.Condition) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Where(conds...))
}

func (d digitalWorkerSettingsORMDo) Order(conds ...field.Expr) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Order(conds...))
}

func (d digitalWorkerSettingsORMDo) Distinct(cols ...field.Expr) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Distinct(cols...))
}

func (d digitalWorkerSettingsORMDo) Omit(cols ...field.Expr) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Omit(cols...))
}

func (d digitalWorkerSettingsORMDo) Join(table schema.Tabler, on ...field.Expr) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Join(table, on...))
}

func (d digitalWorkerSettingsORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.LeftJoin(table, on...))
}

func (d digitalWorkerSettingsORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.RightJoin(table, on...))
}

func (d digitalWorkerSettingsORMDo) Group(cols ...field.Expr) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Group(cols...))
}

func (d digitalWorkerSettingsORMDo) Having(conds ...gen.Condition) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Having(conds...))
}

func (d digitalWorkerSettingsORMDo) Limit(limit int) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Limit(limit))
}

func (d digitalWorkerSettingsORMDo) Offset(offset int) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Offset(offset))
}

func (d digitalWorkerSettingsORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Scopes(funcs...))
}

func (d digitalWorkerSettingsORMDo) Unscoped() IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Unscoped())
}

func (d digitalWorkerSettingsORMDo) Create(values ...*user_servicev1.DigitalWorkerSettingsORM) error {
	if len(values) == 0 {
		return nil
	}
	return d.DO.Create(values)
}

func (d digitalWorkerSettingsORMDo) CreateInBatches(values []*user_servicev1.DigitalWorkerSettingsORM, batchSize int) error {
	return d.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (d digitalWorkerSettingsORMDo) Save(values ...*user_servicev1.DigitalWorkerSettingsORM) error {
	if len(values) == 0 {
		return nil
	}
	return d.DO.Save(values)
}

func (d digitalWorkerSettingsORMDo) First() (*user_servicev1.DigitalWorkerSettingsORM, error) {
	if result, err := d.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.DigitalWorkerSettingsORM), nil
	}
}

func (d digitalWorkerSettingsORMDo) Take() (*user_servicev1.DigitalWorkerSettingsORM, error) {
	if result, err := d.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.DigitalWorkerSettingsORM), nil
	}
}

func (d digitalWorkerSettingsORMDo) Last() (*user_servicev1.DigitalWorkerSettingsORM, error) {
	if result, err := d.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.DigitalWorkerSettingsORM), nil
	}
}

func (d digitalWorkerSettingsORMDo) Find() ([]*user_servicev1.DigitalWorkerSettingsORM, error) {
	result, err := d.DO.Find()
	return result.([]*user_servicev1.DigitalWorkerSettingsORM), err
}

func (d digitalWorkerSettingsORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*user_servicev1.DigitalWorkerSettingsORM, err error) {
	buf := make([]*user_servicev1.DigitalWorkerSettingsORM, 0, batchSize)
	err = d.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (d digitalWorkerSettingsORMDo) FindInBatches(result *[]*user_servicev1.DigitalWorkerSettingsORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return d.DO.FindInBatches(result, batchSize, fc)
}

func (d digitalWorkerSettingsORMDo) Attrs(attrs ...field.AssignExpr) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Attrs(attrs...))
}

func (d digitalWorkerSettingsORMDo) Assign(attrs ...field.AssignExpr) IDigitalWorkerSettingsORMDo {
	return d.withDO(d.DO.Assign(attrs...))
}

func (d digitalWorkerSettingsORMDo) Joins(fields ...field.RelationField) IDigitalWorkerSettingsORMDo {
	for _, _f := range fields {
		d = *d.withDO(d.DO.Joins(_f))
	}
	return &d
}

func (d digitalWorkerSettingsORMDo) Preload(fields ...field.RelationField) IDigitalWorkerSettingsORMDo {
	for _, _f := range fields {
		d = *d.withDO(d.DO.Preload(_f))
	}
	return &d
}

func (d digitalWorkerSettingsORMDo) FirstOrInit() (*user_servicev1.DigitalWorkerSettingsORM, error) {
	if result, err := d.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.DigitalWorkerSettingsORM), nil
	}
}

func (d digitalWorkerSettingsORMDo) FirstOrCreate() (*user_servicev1.DigitalWorkerSettingsORM, error) {
	if result, err := d.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.DigitalWorkerSettingsORM), nil
	}
}

func (d digitalWorkerSettingsORMDo) FindByPage(offset int, limit int) (result []*user_servicev1.DigitalWorkerSettingsORM, count int64, err error) {
	result, err = d.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = d.Offset(-1).Limit(-1).Count()
	return
}

func (d digitalWorkerSettingsORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = d.Count()
	if err != nil {
		return
	}

	err = d.Offset(offset).Limit(limit).Scan(result)
	return
}

func (d digitalWorkerSettingsORMDo) Scan(result interface{}) (err error) {
	return d.DO.Scan(result)
}

func (d digitalWorkerSettingsORMDo) Delete(models ...*user_servicev1.DigitalWorkerSettingsORM) (result gen.ResultInfo, err error) {
	return d.DO.Delete(models)
}

func (d *digitalWorkerSettingsORMDo) withDO(do gen.Dao) *digitalWorkerSettingsORMDo {
	d.DO = *do.(*gen.DO)
	return d
}
