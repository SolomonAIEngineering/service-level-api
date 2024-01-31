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

func newSmartGoalORM(db *gorm.DB, opts ...gen.DOOption) smartGoalORM {
	_smartGoalORM := smartGoalORM{}

	_smartGoalORM.smartGoalORMDo.UseDB(db, opts...)
	_smartGoalORM.smartGoalORMDo.UseModel(&financial_servicev1.SmartGoalORM{})

	tableName := _smartGoalORM.smartGoalORMDo.TableName()
	_smartGoalORM.ALL = field.NewAsterisk(tableName)
	_smartGoalORM.CurrentAmount = field.NewString(tableName, "current_amount")
	_smartGoalORM.Description = field.NewString(tableName, "description")
	_smartGoalORM.Duration = field.NewString(tableName, "duration")
	_smartGoalORM.EndDate = field.NewString(tableName, "end_date")
	_smartGoalORM.GoalType = field.NewString(tableName, "goal_type")
	_smartGoalORM.Id = field.NewUint64(tableName, "id")
	_smartGoalORM.IsCompleted = field.NewBool(tableName, "is_completed")
	_smartGoalORM.Name = field.NewString(tableName, "name")
	_smartGoalORM.PocketId = field.NewUint64(tableName, "pocket_id")
	_smartGoalORM.StartDate = field.NewString(tableName, "start_date")
	_smartGoalORM.TargetAmount = field.NewString(tableName, "target_amount")
	_smartGoalORM.UserId = field.NewString(tableName, "user_id")
	_smartGoalORM.Forecasts = smartGoalORMHasOneForecasts{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Forecasts", "financial_servicev1.ForecastORM"),
	}

	_smartGoalORM.Milestones = smartGoalORMHasManyMilestones{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Milestones", "financial_servicev1.MilestoneORM"),
		Budget: struct {
			field.RelationField
			Category struct {
				field.RelationField
			}
		}{
			RelationField: field.NewRelation("Milestones.Budget", "financial_servicev1.BudgetORM"),
			Category: struct {
				field.RelationField
			}{
				RelationField: field.NewRelation("Milestones.Budget.Category", "financial_servicev1.CategoryORM"),
			},
		},
	}

	_smartGoalORM.Notes = smartGoalORMHasManyNotes{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Notes", "financial_servicev1.SmartNoteORM"),
	}

	_smartGoalORM.fillFieldMap()

	return _smartGoalORM
}

type smartGoalORM struct {
	smartGoalORMDo

	ALL           field.Asterisk
	CurrentAmount field.String
	Description   field.String
	Duration      field.String
	EndDate       field.String
	GoalType      field.String
	Id            field.Uint64
	IsCompleted   field.Bool
	Name          field.String
	PocketId      field.Uint64
	StartDate     field.String
	TargetAmount  field.String
	UserId        field.String
	Forecasts     smartGoalORMHasOneForecasts

	Milestones smartGoalORMHasManyMilestones

	Notes smartGoalORMHasManyNotes

	fieldMap map[string]field.Expr
}

func (s smartGoalORM) Table(newTableName string) *smartGoalORM {
	s.smartGoalORMDo.UseTable(newTableName)
	return s.updateTableName(newTableName)
}

func (s smartGoalORM) As(alias string) *smartGoalORM {
	s.smartGoalORMDo.DO = *(s.smartGoalORMDo.As(alias).(*gen.DO))
	return s.updateTableName(alias)
}

func (s *smartGoalORM) updateTableName(table string) *smartGoalORM {
	s.ALL = field.NewAsterisk(table)
	s.CurrentAmount = field.NewString(table, "current_amount")
	s.Description = field.NewString(table, "description")
	s.Duration = field.NewString(table, "duration")
	s.EndDate = field.NewString(table, "end_date")
	s.GoalType = field.NewString(table, "goal_type")
	s.Id = field.NewUint64(table, "id")
	s.IsCompleted = field.NewBool(table, "is_completed")
	s.Name = field.NewString(table, "name")
	s.PocketId = field.NewUint64(table, "pocket_id")
	s.StartDate = field.NewString(table, "start_date")
	s.TargetAmount = field.NewString(table, "target_amount")
	s.UserId = field.NewString(table, "user_id")

	s.fillFieldMap()

	return s
}

func (s *smartGoalORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := s.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (s *smartGoalORM) fillFieldMap() {
	s.fieldMap = make(map[string]field.Expr, 15)
	s.fieldMap["current_amount"] = s.CurrentAmount
	s.fieldMap["description"] = s.Description
	s.fieldMap["duration"] = s.Duration
	s.fieldMap["end_date"] = s.EndDate
	s.fieldMap["goal_type"] = s.GoalType
	s.fieldMap["id"] = s.Id
	s.fieldMap["is_completed"] = s.IsCompleted
	s.fieldMap["name"] = s.Name
	s.fieldMap["pocket_id"] = s.PocketId
	s.fieldMap["start_date"] = s.StartDate
	s.fieldMap["target_amount"] = s.TargetAmount
	s.fieldMap["user_id"] = s.UserId

}

func (s smartGoalORM) clone(db *gorm.DB) smartGoalORM {
	s.smartGoalORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return s
}

func (s smartGoalORM) replaceDB(db *gorm.DB) smartGoalORM {
	s.smartGoalORMDo.ReplaceDB(db)
	return s
}

type smartGoalORMHasOneForecasts struct {
	db *gorm.DB

	field.RelationField
}

func (a smartGoalORMHasOneForecasts) Where(conds ...field.Expr) *smartGoalORMHasOneForecasts {
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

func (a smartGoalORMHasOneForecasts) WithContext(ctx context.Context) *smartGoalORMHasOneForecasts {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a smartGoalORMHasOneForecasts) Session(session *gorm.Session) *smartGoalORMHasOneForecasts {
	a.db = a.db.Session(session)
	return &a
}

func (a smartGoalORMHasOneForecasts) Model(m *financial_servicev1.SmartGoalORM) *smartGoalORMHasOneForecastsTx {
	return &smartGoalORMHasOneForecastsTx{a.db.Model(m).Association(a.Name())}
}

type smartGoalORMHasOneForecastsTx struct{ tx *gorm.Association }

func (a smartGoalORMHasOneForecastsTx) Find() (result *financial_servicev1.ForecastORM, err error) {
	return result, a.tx.Find(&result)
}

func (a smartGoalORMHasOneForecastsTx) Append(values ...*financial_servicev1.ForecastORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a smartGoalORMHasOneForecastsTx) Replace(values ...*financial_servicev1.ForecastORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a smartGoalORMHasOneForecastsTx) Delete(values ...*financial_servicev1.ForecastORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a smartGoalORMHasOneForecastsTx) Clear() error {
	return a.tx.Clear()
}

func (a smartGoalORMHasOneForecastsTx) Count() int64 {
	return a.tx.Count()
}

type smartGoalORMHasManyMilestones struct {
	db *gorm.DB

	field.RelationField

	Budget struct {
		field.RelationField
		Category struct {
			field.RelationField
		}
	}
}

func (a smartGoalORMHasManyMilestones) Where(conds ...field.Expr) *smartGoalORMHasManyMilestones {
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

func (a smartGoalORMHasManyMilestones) WithContext(ctx context.Context) *smartGoalORMHasManyMilestones {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a smartGoalORMHasManyMilestones) Session(session *gorm.Session) *smartGoalORMHasManyMilestones {
	a.db = a.db.Session(session)
	return &a
}

func (a smartGoalORMHasManyMilestones) Model(m *financial_servicev1.SmartGoalORM) *smartGoalORMHasManyMilestonesTx {
	return &smartGoalORMHasManyMilestonesTx{a.db.Model(m).Association(a.Name())}
}

type smartGoalORMHasManyMilestonesTx struct{ tx *gorm.Association }

func (a smartGoalORMHasManyMilestonesTx) Find() (result []*financial_servicev1.MilestoneORM, err error) {
	return result, a.tx.Find(&result)
}

func (a smartGoalORMHasManyMilestonesTx) Append(values ...*financial_servicev1.MilestoneORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a smartGoalORMHasManyMilestonesTx) Replace(values ...*financial_servicev1.MilestoneORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a smartGoalORMHasManyMilestonesTx) Delete(values ...*financial_servicev1.MilestoneORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a smartGoalORMHasManyMilestonesTx) Clear() error {
	return a.tx.Clear()
}

func (a smartGoalORMHasManyMilestonesTx) Count() int64 {
	return a.tx.Count()
}

type smartGoalORMHasManyNotes struct {
	db *gorm.DB

	field.RelationField
}

func (a smartGoalORMHasManyNotes) Where(conds ...field.Expr) *smartGoalORMHasManyNotes {
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

func (a smartGoalORMHasManyNotes) WithContext(ctx context.Context) *smartGoalORMHasManyNotes {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a smartGoalORMHasManyNotes) Session(session *gorm.Session) *smartGoalORMHasManyNotes {
	a.db = a.db.Session(session)
	return &a
}

func (a smartGoalORMHasManyNotes) Model(m *financial_servicev1.SmartGoalORM) *smartGoalORMHasManyNotesTx {
	return &smartGoalORMHasManyNotesTx{a.db.Model(m).Association(a.Name())}
}

type smartGoalORMHasManyNotesTx struct{ tx *gorm.Association }

func (a smartGoalORMHasManyNotesTx) Find() (result []*financial_servicev1.SmartNoteORM, err error) {
	return result, a.tx.Find(&result)
}

func (a smartGoalORMHasManyNotesTx) Append(values ...*financial_servicev1.SmartNoteORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a smartGoalORMHasManyNotesTx) Replace(values ...*financial_servicev1.SmartNoteORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a smartGoalORMHasManyNotesTx) Delete(values ...*financial_servicev1.SmartNoteORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a smartGoalORMHasManyNotesTx) Clear() error {
	return a.tx.Clear()
}

func (a smartGoalORMHasManyNotesTx) Count() int64 {
	return a.tx.Count()
}

type smartGoalORMDo struct{ gen.DO }

type ISmartGoalORMDo interface {
	gen.SubQuery
	Debug() ISmartGoalORMDo
	WithContext(ctx context.Context) ISmartGoalORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() ISmartGoalORMDo
	WriteDB() ISmartGoalORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) ISmartGoalORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) ISmartGoalORMDo
	Not(conds ...gen.Condition) ISmartGoalORMDo
	Or(conds ...gen.Condition) ISmartGoalORMDo
	Select(conds ...field.Expr) ISmartGoalORMDo
	Where(conds ...gen.Condition) ISmartGoalORMDo
	Order(conds ...field.Expr) ISmartGoalORMDo
	Distinct(cols ...field.Expr) ISmartGoalORMDo
	Omit(cols ...field.Expr) ISmartGoalORMDo
	Join(table schema.Tabler, on ...field.Expr) ISmartGoalORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) ISmartGoalORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) ISmartGoalORMDo
	Group(cols ...field.Expr) ISmartGoalORMDo
	Having(conds ...gen.Condition) ISmartGoalORMDo
	Limit(limit int) ISmartGoalORMDo
	Offset(offset int) ISmartGoalORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) ISmartGoalORMDo
	Unscoped() ISmartGoalORMDo
	Create(values ...*financial_servicev1.SmartGoalORM) error
	CreateInBatches(values []*financial_servicev1.SmartGoalORM, batchSize int) error
	Save(values ...*financial_servicev1.SmartGoalORM) error
	First() (*financial_servicev1.SmartGoalORM, error)
	Take() (*financial_servicev1.SmartGoalORM, error)
	Last() (*financial_servicev1.SmartGoalORM, error)
	Find() ([]*financial_servicev1.SmartGoalORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.SmartGoalORM, err error)
	FindInBatches(result *[]*financial_servicev1.SmartGoalORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*financial_servicev1.SmartGoalORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) ISmartGoalORMDo
	Assign(attrs ...field.AssignExpr) ISmartGoalORMDo
	Joins(fields ...field.RelationField) ISmartGoalORMDo
	Preload(fields ...field.RelationField) ISmartGoalORMDo
	FirstOrInit() (*financial_servicev1.SmartGoalORM, error)
	FirstOrCreate() (*financial_servicev1.SmartGoalORM, error)
	FindByPage(offset int, limit int) (result []*financial_servicev1.SmartGoalORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) ISmartGoalORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result financial_servicev1.SmartGoalORM, err error)
	GetRecordByIDs(ids []int) (result []financial_servicev1.SmartGoalORM, err error)
	CreateRecord(item financial_servicev1.SmartGoalORM) (err error)
	UpdateRecordByID(id int, item financial_servicev1.SmartGoalORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.SmartGoalORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result financial_servicev1.SmartGoalORM, err error)
	GetByIDs(ids []uint64) (result []financial_servicev1.SmartGoalORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (s smartGoalORMDo) GetRecordByID(id int) (result financial_servicev1.SmartGoalORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM smart_goals ")
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
func (s smartGoalORMDo) GetRecordByIDs(ids []int) (result []financial_servicev1.SmartGoalORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM smart_goals ")
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
func (s smartGoalORMDo) CreateRecord(item financial_servicev1.SmartGoalORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO smart_goals (columns) VALUES (values) ")

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
func (s smartGoalORMDo) UpdateRecordByID(id int, item financial_servicev1.SmartGoalORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE smart_goals SET columns=values ")
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
func (s smartGoalORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM smart_goals ")
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
func (s smartGoalORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.SmartGoalORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM smart_goals ORDER BY " + s.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (s smartGoalORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM smart_goals ")

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
func (s smartGoalORMDo) GetByID(id uint64) (result financial_servicev1.SmartGoalORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM smart_goals ")
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
func (s smartGoalORMDo) GetByIDs(ids []uint64) (result []financial_servicev1.SmartGoalORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM smart_goals ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (s smartGoalORMDo) Debug() ISmartGoalORMDo {
	return s.withDO(s.DO.Debug())
}

func (s smartGoalORMDo) WithContext(ctx context.Context) ISmartGoalORMDo {
	return s.withDO(s.DO.WithContext(ctx))
}

func (s smartGoalORMDo) ReadDB() ISmartGoalORMDo {
	return s.Clauses(dbresolver.Read)
}

func (s smartGoalORMDo) WriteDB() ISmartGoalORMDo {
	return s.Clauses(dbresolver.Write)
}

func (s smartGoalORMDo) Session(config *gorm.Session) ISmartGoalORMDo {
	return s.withDO(s.DO.Session(config))
}

func (s smartGoalORMDo) Clauses(conds ...clause.Expression) ISmartGoalORMDo {
	return s.withDO(s.DO.Clauses(conds...))
}

func (s smartGoalORMDo) Returning(value interface{}, columns ...string) ISmartGoalORMDo {
	return s.withDO(s.DO.Returning(value, columns...))
}

func (s smartGoalORMDo) Not(conds ...gen.Condition) ISmartGoalORMDo {
	return s.withDO(s.DO.Not(conds...))
}

func (s smartGoalORMDo) Or(conds ...gen.Condition) ISmartGoalORMDo {
	return s.withDO(s.DO.Or(conds...))
}

func (s smartGoalORMDo) Select(conds ...field.Expr) ISmartGoalORMDo {
	return s.withDO(s.DO.Select(conds...))
}

func (s smartGoalORMDo) Where(conds ...gen.Condition) ISmartGoalORMDo {
	return s.withDO(s.DO.Where(conds...))
}

func (s smartGoalORMDo) Order(conds ...field.Expr) ISmartGoalORMDo {
	return s.withDO(s.DO.Order(conds...))
}

func (s smartGoalORMDo) Distinct(cols ...field.Expr) ISmartGoalORMDo {
	return s.withDO(s.DO.Distinct(cols...))
}

func (s smartGoalORMDo) Omit(cols ...field.Expr) ISmartGoalORMDo {
	return s.withDO(s.DO.Omit(cols...))
}

func (s smartGoalORMDo) Join(table schema.Tabler, on ...field.Expr) ISmartGoalORMDo {
	return s.withDO(s.DO.Join(table, on...))
}

func (s smartGoalORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) ISmartGoalORMDo {
	return s.withDO(s.DO.LeftJoin(table, on...))
}

func (s smartGoalORMDo) RightJoin(table schema.Tabler, on ...field.Expr) ISmartGoalORMDo {
	return s.withDO(s.DO.RightJoin(table, on...))
}

func (s smartGoalORMDo) Group(cols ...field.Expr) ISmartGoalORMDo {
	return s.withDO(s.DO.Group(cols...))
}

func (s smartGoalORMDo) Having(conds ...gen.Condition) ISmartGoalORMDo {
	return s.withDO(s.DO.Having(conds...))
}

func (s smartGoalORMDo) Limit(limit int) ISmartGoalORMDo {
	return s.withDO(s.DO.Limit(limit))
}

func (s smartGoalORMDo) Offset(offset int) ISmartGoalORMDo {
	return s.withDO(s.DO.Offset(offset))
}

func (s smartGoalORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) ISmartGoalORMDo {
	return s.withDO(s.DO.Scopes(funcs...))
}

func (s smartGoalORMDo) Unscoped() ISmartGoalORMDo {
	return s.withDO(s.DO.Unscoped())
}

func (s smartGoalORMDo) Create(values ...*financial_servicev1.SmartGoalORM) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Create(values)
}

func (s smartGoalORMDo) CreateInBatches(values []*financial_servicev1.SmartGoalORM, batchSize int) error {
	return s.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (s smartGoalORMDo) Save(values ...*financial_servicev1.SmartGoalORM) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Save(values)
}

func (s smartGoalORMDo) First() (*financial_servicev1.SmartGoalORM, error) {
	if result, err := s.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.SmartGoalORM), nil
	}
}

func (s smartGoalORMDo) Take() (*financial_servicev1.SmartGoalORM, error) {
	if result, err := s.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.SmartGoalORM), nil
	}
}

func (s smartGoalORMDo) Last() (*financial_servicev1.SmartGoalORM, error) {
	if result, err := s.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.SmartGoalORM), nil
	}
}

func (s smartGoalORMDo) Find() ([]*financial_servicev1.SmartGoalORM, error) {
	result, err := s.DO.Find()
	return result.([]*financial_servicev1.SmartGoalORM), err
}

func (s smartGoalORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.SmartGoalORM, err error) {
	buf := make([]*financial_servicev1.SmartGoalORM, 0, batchSize)
	err = s.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (s smartGoalORMDo) FindInBatches(result *[]*financial_servicev1.SmartGoalORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return s.DO.FindInBatches(result, batchSize, fc)
}

func (s smartGoalORMDo) Attrs(attrs ...field.AssignExpr) ISmartGoalORMDo {
	return s.withDO(s.DO.Attrs(attrs...))
}

func (s smartGoalORMDo) Assign(attrs ...field.AssignExpr) ISmartGoalORMDo {
	return s.withDO(s.DO.Assign(attrs...))
}

func (s smartGoalORMDo) Joins(fields ...field.RelationField) ISmartGoalORMDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Joins(_f))
	}
	return &s
}

func (s smartGoalORMDo) Preload(fields ...field.RelationField) ISmartGoalORMDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Preload(_f))
	}
	return &s
}

func (s smartGoalORMDo) FirstOrInit() (*financial_servicev1.SmartGoalORM, error) {
	if result, err := s.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.SmartGoalORM), nil
	}
}

func (s smartGoalORMDo) FirstOrCreate() (*financial_servicev1.SmartGoalORM, error) {
	if result, err := s.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.SmartGoalORM), nil
	}
}

func (s smartGoalORMDo) FindByPage(offset int, limit int) (result []*financial_servicev1.SmartGoalORM, count int64, err error) {
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

func (s smartGoalORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = s.Count()
	if err != nil {
		return
	}

	err = s.Offset(offset).Limit(limit).Scan(result)
	return
}

func (s smartGoalORMDo) Scan(result interface{}) (err error) {
	return s.DO.Scan(result)
}

func (s smartGoalORMDo) Delete(models ...*financial_servicev1.SmartGoalORM) (result gen.ResultInfo, err error) {
	return s.DO.Delete(models)
}

func (s *smartGoalORMDo) withDO(do gen.Dao) *smartGoalORMDo {
	s.DO = *do.(*gen.DO)
	return s
}
