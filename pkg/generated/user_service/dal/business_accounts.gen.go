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

	user_servicev1 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/user_service/v1"
)

func newBusinessAccountORM(db *gorm.DB, opts ...gen.DOOption) businessAccountORM {
	_businessAccountORM := businessAccountORM{}

	_businessAccountORM.businessAccountORMDo.UseDB(db, opts...)
	_businessAccountORM.businessAccountORMDo.UseModel(&user_servicev1.BusinessAccountORM{})

	tableName := _businessAccountORM.businessAccountORMDo.TableName()
	_businessAccountORM.ALL = field.NewAsterisk(tableName)
	_businessAccountORM.AccountType = field.NewString(tableName, "account_type")
	_businessAccountORM.AlgoliaUserId = field.NewString(tableName, "algolia_user_id")
	_businessAccountORM.Auth0UserId = field.NewString(tableName, "auth0_user_id")
	_businessAccountORM.AuthnAccountId = field.NewUint64(tableName, "authn_account_id")
	_businessAccountORM.Bio = field.NewString(tableName, "bio")
	_businessAccountORM.CompanyDescription = field.NewString(tableName, "company_description")
	_businessAccountORM.CompanyEstablishedDate = field.NewString(tableName, "company_established_date")
	_businessAccountORM.CompanyIndustryType = field.NewString(tableName, "company_industry_type")
	_businessAccountORM.CompanyName = field.NewString(tableName, "company_name")
	_businessAccountORM.CompanyWebsiteUrl = field.NewString(tableName, "company_website_url")
	_businessAccountORM.CreatedAt = field.NewTime(tableName, "created_at")
	_businessAccountORM.Email = field.NewString(tableName, "email")
	_businessAccountORM.Headline = field.NewString(tableName, "headline")
	_businessAccountORM.Id = field.NewUint64(tableName, "id")
	_businessAccountORM.IsActive = field.NewBool(tableName, "is_active")
	_businessAccountORM.IsEmailVerified = field.NewBool(tableName, "is_email_verified")
	_businessAccountORM.IsPrivate = field.NewBool(tableName, "is_private")
	_businessAccountORM.PhoneNumber = field.NewString(tableName, "phone_number")
	_businessAccountORM.ProfileImageUrl = field.NewString(tableName, "profile_image_url")
	_businessAccountORM.Username = field.NewString(tableName, "username")
	_businessAccountORM.VerifiedAt = field.NewTime(tableName, "verified_at")
	_businessAccountORM.Address = businessAccountORMHasOneAddress{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Address", "user_servicev1.AddressORM"),
	}

	_businessAccountORM.Role = businessAccountORMHasOneRole{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Role", "user_servicev1.RoleORM"),
		AuditLog: struct {
			field.RelationField
		}{
			RelationField: field.NewRelation("Role.AuditLog", "user_servicev1.RoleAuditEventsORM"),
		},
	}

	_businessAccountORM.Settings = businessAccountORMHasOneSettings{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Settings", "user_servicev1.SettingsORM"),
		DigitalWorkerSettings: struct {
			field.RelationField
		}{
			RelationField: field.NewRelation("Settings.DigitalWorkerSettings", "user_servicev1.DigitalWorkerSettingsORM"),
		},
		FinancialPreferences: struct {
			field.RelationField
		}{
			RelationField: field.NewRelation("Settings.FinancialPreferences", "user_servicev1.FinancialPreferencesORM"),
		},
		NotificationSettings: struct {
			field.RelationField
		}{
			RelationField: field.NewRelation("Settings.NotificationSettings", "user_servicev1.NotificationSettingsORM"),
		},
	}

	_businessAccountORM.Tags = businessAccountORMHasManyTags{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Tags", "user_servicev1.TagsORM"),
	}

	_businessAccountORM.fillFieldMap()

	return _businessAccountORM
}

type businessAccountORM struct {
	businessAccountORMDo

	ALL                    field.Asterisk
	AccountType            field.String
	AlgoliaUserId          field.String
	Auth0UserId            field.String
	AuthnAccountId         field.Uint64
	Bio                    field.String
	CompanyDescription     field.String
	CompanyEstablishedDate field.String
	CompanyIndustryType    field.String
	CompanyName            field.String
	CompanyWebsiteUrl      field.String
	CreatedAt              field.Time
	Email                  field.String
	Headline               field.String
	Id                     field.Uint64
	IsActive               field.Bool
	IsEmailVerified        field.Bool
	IsPrivate              field.Bool
	PhoneNumber            field.String
	ProfileImageUrl        field.String
	Username               field.String
	VerifiedAt             field.Time
	Address                businessAccountORMHasOneAddress

	Role businessAccountORMHasOneRole

	Settings businessAccountORMHasOneSettings

	Tags businessAccountORMHasManyTags

	fieldMap map[string]field.Expr
}

func (b businessAccountORM) Table(newTableName string) *businessAccountORM {
	b.businessAccountORMDo.UseTable(newTableName)
	return b.updateTableName(newTableName)
}

func (b businessAccountORM) As(alias string) *businessAccountORM {
	b.businessAccountORMDo.DO = *(b.businessAccountORMDo.As(alias).(*gen.DO))
	return b.updateTableName(alias)
}

func (b *businessAccountORM) updateTableName(table string) *businessAccountORM {
	b.ALL = field.NewAsterisk(table)
	b.AccountType = field.NewString(table, "account_type")
	b.AlgoliaUserId = field.NewString(table, "algolia_user_id")
	b.Auth0UserId = field.NewString(table, "auth0_user_id")
	b.AuthnAccountId = field.NewUint64(table, "authn_account_id")
	b.Bio = field.NewString(table, "bio")
	b.CompanyDescription = field.NewString(table, "company_description")
	b.CompanyEstablishedDate = field.NewString(table, "company_established_date")
	b.CompanyIndustryType = field.NewString(table, "company_industry_type")
	b.CompanyName = field.NewString(table, "company_name")
	b.CompanyWebsiteUrl = field.NewString(table, "company_website_url")
	b.CreatedAt = field.NewTime(table, "created_at")
	b.Email = field.NewString(table, "email")
	b.Headline = field.NewString(table, "headline")
	b.Id = field.NewUint64(table, "id")
	b.IsActive = field.NewBool(table, "is_active")
	b.IsEmailVerified = field.NewBool(table, "is_email_verified")
	b.IsPrivate = field.NewBool(table, "is_private")
	b.PhoneNumber = field.NewString(table, "phone_number")
	b.ProfileImageUrl = field.NewString(table, "profile_image_url")
	b.Username = field.NewString(table, "username")
	b.VerifiedAt = field.NewTime(table, "verified_at")

	b.fillFieldMap()

	return b
}

func (b *businessAccountORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := b.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (b *businessAccountORM) fillFieldMap() {
	b.fieldMap = make(map[string]field.Expr, 25)
	b.fieldMap["account_type"] = b.AccountType
	b.fieldMap["algolia_user_id"] = b.AlgoliaUserId
	b.fieldMap["auth0_user_id"] = b.Auth0UserId
	b.fieldMap["authn_account_id"] = b.AuthnAccountId
	b.fieldMap["bio"] = b.Bio
	b.fieldMap["company_description"] = b.CompanyDescription
	b.fieldMap["company_established_date"] = b.CompanyEstablishedDate
	b.fieldMap["company_industry_type"] = b.CompanyIndustryType
	b.fieldMap["company_name"] = b.CompanyName
	b.fieldMap["company_website_url"] = b.CompanyWebsiteUrl
	b.fieldMap["created_at"] = b.CreatedAt
	b.fieldMap["email"] = b.Email
	b.fieldMap["headline"] = b.Headline
	b.fieldMap["id"] = b.Id
	b.fieldMap["is_active"] = b.IsActive
	b.fieldMap["is_email_verified"] = b.IsEmailVerified
	b.fieldMap["is_private"] = b.IsPrivate
	b.fieldMap["phone_number"] = b.PhoneNumber
	b.fieldMap["profile_image_url"] = b.ProfileImageUrl
	b.fieldMap["username"] = b.Username
	b.fieldMap["verified_at"] = b.VerifiedAt

}

func (b businessAccountORM) clone(db *gorm.DB) businessAccountORM {
	b.businessAccountORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return b
}

func (b businessAccountORM) replaceDB(db *gorm.DB) businessAccountORM {
	b.businessAccountORMDo.ReplaceDB(db)
	return b
}

type businessAccountORMHasOneAddress struct {
	db *gorm.DB

	field.RelationField
}

func (a businessAccountORMHasOneAddress) Where(conds ...field.Expr) *businessAccountORMHasOneAddress {
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

func (a businessAccountORMHasOneAddress) WithContext(ctx context.Context) *businessAccountORMHasOneAddress {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a businessAccountORMHasOneAddress) Session(session *gorm.Session) *businessAccountORMHasOneAddress {
	a.db = a.db.Session(session)
	return &a
}

func (a businessAccountORMHasOneAddress) Model(m *user_servicev1.BusinessAccountORM) *businessAccountORMHasOneAddressTx {
	return &businessAccountORMHasOneAddressTx{a.db.Model(m).Association(a.Name())}
}

type businessAccountORMHasOneAddressTx struct{ tx *gorm.Association }

func (a businessAccountORMHasOneAddressTx) Find() (result *user_servicev1.AddressORM, err error) {
	return result, a.tx.Find(&result)
}

func (a businessAccountORMHasOneAddressTx) Append(values ...*user_servicev1.AddressORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a businessAccountORMHasOneAddressTx) Replace(values ...*user_servicev1.AddressORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a businessAccountORMHasOneAddressTx) Delete(values ...*user_servicev1.AddressORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a businessAccountORMHasOneAddressTx) Clear() error {
	return a.tx.Clear()
}

func (a businessAccountORMHasOneAddressTx) Count() int64 {
	return a.tx.Count()
}

type businessAccountORMHasOneRole struct {
	db *gorm.DB

	field.RelationField

	AuditLog struct {
		field.RelationField
	}
}

func (a businessAccountORMHasOneRole) Where(conds ...field.Expr) *businessAccountORMHasOneRole {
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

func (a businessAccountORMHasOneRole) WithContext(ctx context.Context) *businessAccountORMHasOneRole {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a businessAccountORMHasOneRole) Session(session *gorm.Session) *businessAccountORMHasOneRole {
	a.db = a.db.Session(session)
	return &a
}

func (a businessAccountORMHasOneRole) Model(m *user_servicev1.BusinessAccountORM) *businessAccountORMHasOneRoleTx {
	return &businessAccountORMHasOneRoleTx{a.db.Model(m).Association(a.Name())}
}

type businessAccountORMHasOneRoleTx struct{ tx *gorm.Association }

func (a businessAccountORMHasOneRoleTx) Find() (result *user_servicev1.RoleORM, err error) {
	return result, a.tx.Find(&result)
}

func (a businessAccountORMHasOneRoleTx) Append(values ...*user_servicev1.RoleORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a businessAccountORMHasOneRoleTx) Replace(values ...*user_servicev1.RoleORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a businessAccountORMHasOneRoleTx) Delete(values ...*user_servicev1.RoleORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a businessAccountORMHasOneRoleTx) Clear() error {
	return a.tx.Clear()
}

func (a businessAccountORMHasOneRoleTx) Count() int64 {
	return a.tx.Count()
}

type businessAccountORMHasOneSettings struct {
	db *gorm.DB

	field.RelationField

	DigitalWorkerSettings struct {
		field.RelationField
	}
	FinancialPreferences struct {
		field.RelationField
	}
	NotificationSettings struct {
		field.RelationField
	}
}

func (a businessAccountORMHasOneSettings) Where(conds ...field.Expr) *businessAccountORMHasOneSettings {
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

func (a businessAccountORMHasOneSettings) WithContext(ctx context.Context) *businessAccountORMHasOneSettings {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a businessAccountORMHasOneSettings) Session(session *gorm.Session) *businessAccountORMHasOneSettings {
	a.db = a.db.Session(session)
	return &a
}

func (a businessAccountORMHasOneSettings) Model(m *user_servicev1.BusinessAccountORM) *businessAccountORMHasOneSettingsTx {
	return &businessAccountORMHasOneSettingsTx{a.db.Model(m).Association(a.Name())}
}

type businessAccountORMHasOneSettingsTx struct{ tx *gorm.Association }

func (a businessAccountORMHasOneSettingsTx) Find() (result *user_servicev1.SettingsORM, err error) {
	return result, a.tx.Find(&result)
}

func (a businessAccountORMHasOneSettingsTx) Append(values ...*user_servicev1.SettingsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a businessAccountORMHasOneSettingsTx) Replace(values ...*user_servicev1.SettingsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a businessAccountORMHasOneSettingsTx) Delete(values ...*user_servicev1.SettingsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a businessAccountORMHasOneSettingsTx) Clear() error {
	return a.tx.Clear()
}

func (a businessAccountORMHasOneSettingsTx) Count() int64 {
	return a.tx.Count()
}

type businessAccountORMHasManyTags struct {
	db *gorm.DB

	field.RelationField
}

func (a businessAccountORMHasManyTags) Where(conds ...field.Expr) *businessAccountORMHasManyTags {
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

func (a businessAccountORMHasManyTags) WithContext(ctx context.Context) *businessAccountORMHasManyTags {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a businessAccountORMHasManyTags) Session(session *gorm.Session) *businessAccountORMHasManyTags {
	a.db = a.db.Session(session)
	return &a
}

func (a businessAccountORMHasManyTags) Model(m *user_servicev1.BusinessAccountORM) *businessAccountORMHasManyTagsTx {
	return &businessAccountORMHasManyTagsTx{a.db.Model(m).Association(a.Name())}
}

type businessAccountORMHasManyTagsTx struct{ tx *gorm.Association }

func (a businessAccountORMHasManyTagsTx) Find() (result []*user_servicev1.TagsORM, err error) {
	return result, a.tx.Find(&result)
}

func (a businessAccountORMHasManyTagsTx) Append(values ...*user_servicev1.TagsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a businessAccountORMHasManyTagsTx) Replace(values ...*user_servicev1.TagsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a businessAccountORMHasManyTagsTx) Delete(values ...*user_servicev1.TagsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a businessAccountORMHasManyTagsTx) Clear() error {
	return a.tx.Clear()
}

func (a businessAccountORMHasManyTagsTx) Count() int64 {
	return a.tx.Count()
}

type businessAccountORMDo struct{ gen.DO }

type IBusinessAccountORMDo interface {
	gen.SubQuery
	Debug() IBusinessAccountORMDo
	WithContext(ctx context.Context) IBusinessAccountORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IBusinessAccountORMDo
	WriteDB() IBusinessAccountORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IBusinessAccountORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IBusinessAccountORMDo
	Not(conds ...gen.Condition) IBusinessAccountORMDo
	Or(conds ...gen.Condition) IBusinessAccountORMDo
	Select(conds ...field.Expr) IBusinessAccountORMDo
	Where(conds ...gen.Condition) IBusinessAccountORMDo
	Order(conds ...field.Expr) IBusinessAccountORMDo
	Distinct(cols ...field.Expr) IBusinessAccountORMDo
	Omit(cols ...field.Expr) IBusinessAccountORMDo
	Join(table schema.Tabler, on ...field.Expr) IBusinessAccountORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IBusinessAccountORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IBusinessAccountORMDo
	Group(cols ...field.Expr) IBusinessAccountORMDo
	Having(conds ...gen.Condition) IBusinessAccountORMDo
	Limit(limit int) IBusinessAccountORMDo
	Offset(offset int) IBusinessAccountORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IBusinessAccountORMDo
	Unscoped() IBusinessAccountORMDo
	Create(values ...*user_servicev1.BusinessAccountORM) error
	CreateInBatches(values []*user_servicev1.BusinessAccountORM, batchSize int) error
	Save(values ...*user_servicev1.BusinessAccountORM) error
	First() (*user_servicev1.BusinessAccountORM, error)
	Take() (*user_servicev1.BusinessAccountORM, error)
	Last() (*user_servicev1.BusinessAccountORM, error)
	Find() ([]*user_servicev1.BusinessAccountORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*user_servicev1.BusinessAccountORM, err error)
	FindInBatches(result *[]*user_servicev1.BusinessAccountORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*user_servicev1.BusinessAccountORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IBusinessAccountORMDo
	Assign(attrs ...field.AssignExpr) IBusinessAccountORMDo
	Joins(fields ...field.RelationField) IBusinessAccountORMDo
	Preload(fields ...field.RelationField) IBusinessAccountORMDo
	FirstOrInit() (*user_servicev1.BusinessAccountORM, error)
	FirstOrCreate() (*user_servicev1.BusinessAccountORM, error)
	FindByPage(offset int, limit int) (result []*user_servicev1.BusinessAccountORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IBusinessAccountORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result user_servicev1.BusinessAccountORM, err error)
	GetRecordByIDs(ids []int) (result []user_servicev1.BusinessAccountORM, err error)
	CreateRecord(item user_servicev1.BusinessAccountORM) (err error)
	UpdateRecordByID(id int, item user_servicev1.BusinessAccountORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []user_servicev1.BusinessAccountORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result user_servicev1.BusinessAccountORM, err error)
	GetByIDs(ids []uint64) (result []user_servicev1.BusinessAccountORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (b businessAccountORMDo) GetRecordByID(id int) (result user_servicev1.BusinessAccountORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM business_accounts ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (b businessAccountORMDo) GetRecordByIDs(ids []int) (result []user_servicev1.BusinessAccountORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM business_accounts ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (b businessAccountORMDo) CreateRecord(item user_servicev1.BusinessAccountORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO business_accounts (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (b businessAccountORMDo) UpdateRecordByID(id int, item user_servicev1.BusinessAccountORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE business_accounts SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (b businessAccountORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM business_accounts ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (b businessAccountORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []user_servicev1.BusinessAccountORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM business_accounts ORDER BY " + b.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (b businessAccountORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM business_accounts ")

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (b businessAccountORMDo) GetByID(id uint64) (result user_servicev1.BusinessAccountORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM business_accounts ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (b businessAccountORMDo) GetByIDs(ids []uint64) (result []user_servicev1.BusinessAccountORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM business_accounts ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (b businessAccountORMDo) Debug() IBusinessAccountORMDo {
	return b.withDO(b.DO.Debug())
}

func (b businessAccountORMDo) WithContext(ctx context.Context) IBusinessAccountORMDo {
	return b.withDO(b.DO.WithContext(ctx))
}

func (b businessAccountORMDo) ReadDB() IBusinessAccountORMDo {
	return b.Clauses(dbresolver.Read)
}

func (b businessAccountORMDo) WriteDB() IBusinessAccountORMDo {
	return b.Clauses(dbresolver.Write)
}

func (b businessAccountORMDo) Session(config *gorm.Session) IBusinessAccountORMDo {
	return b.withDO(b.DO.Session(config))
}

func (b businessAccountORMDo) Clauses(conds ...clause.Expression) IBusinessAccountORMDo {
	return b.withDO(b.DO.Clauses(conds...))
}

func (b businessAccountORMDo) Returning(value interface{}, columns ...string) IBusinessAccountORMDo {
	return b.withDO(b.DO.Returning(value, columns...))
}

func (b businessAccountORMDo) Not(conds ...gen.Condition) IBusinessAccountORMDo {
	return b.withDO(b.DO.Not(conds...))
}

func (b businessAccountORMDo) Or(conds ...gen.Condition) IBusinessAccountORMDo {
	return b.withDO(b.DO.Or(conds...))
}

func (b businessAccountORMDo) Select(conds ...field.Expr) IBusinessAccountORMDo {
	return b.withDO(b.DO.Select(conds...))
}

func (b businessAccountORMDo) Where(conds ...gen.Condition) IBusinessAccountORMDo {
	return b.withDO(b.DO.Where(conds...))
}

func (b businessAccountORMDo) Order(conds ...field.Expr) IBusinessAccountORMDo {
	return b.withDO(b.DO.Order(conds...))
}

func (b businessAccountORMDo) Distinct(cols ...field.Expr) IBusinessAccountORMDo {
	return b.withDO(b.DO.Distinct(cols...))
}

func (b businessAccountORMDo) Omit(cols ...field.Expr) IBusinessAccountORMDo {
	return b.withDO(b.DO.Omit(cols...))
}

func (b businessAccountORMDo) Join(table schema.Tabler, on ...field.Expr) IBusinessAccountORMDo {
	return b.withDO(b.DO.Join(table, on...))
}

func (b businessAccountORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IBusinessAccountORMDo {
	return b.withDO(b.DO.LeftJoin(table, on...))
}

func (b businessAccountORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IBusinessAccountORMDo {
	return b.withDO(b.DO.RightJoin(table, on...))
}

func (b businessAccountORMDo) Group(cols ...field.Expr) IBusinessAccountORMDo {
	return b.withDO(b.DO.Group(cols...))
}

func (b businessAccountORMDo) Having(conds ...gen.Condition) IBusinessAccountORMDo {
	return b.withDO(b.DO.Having(conds...))
}

func (b businessAccountORMDo) Limit(limit int) IBusinessAccountORMDo {
	return b.withDO(b.DO.Limit(limit))
}

func (b businessAccountORMDo) Offset(offset int) IBusinessAccountORMDo {
	return b.withDO(b.DO.Offset(offset))
}

func (b businessAccountORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IBusinessAccountORMDo {
	return b.withDO(b.DO.Scopes(funcs...))
}

func (b businessAccountORMDo) Unscoped() IBusinessAccountORMDo {
	return b.withDO(b.DO.Unscoped())
}

func (b businessAccountORMDo) Create(values ...*user_servicev1.BusinessAccountORM) error {
	if len(values) == 0 {
		return nil
	}
	return b.DO.Create(values)
}

func (b businessAccountORMDo) CreateInBatches(values []*user_servicev1.BusinessAccountORM, batchSize int) error {
	return b.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (b businessAccountORMDo) Save(values ...*user_servicev1.BusinessAccountORM) error {
	if len(values) == 0 {
		return nil
	}
	return b.DO.Save(values)
}

func (b businessAccountORMDo) First() (*user_servicev1.BusinessAccountORM, error) {
	if result, err := b.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.BusinessAccountORM), nil
	}
}

func (b businessAccountORMDo) Take() (*user_servicev1.BusinessAccountORM, error) {
	if result, err := b.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.BusinessAccountORM), nil
	}
}

func (b businessAccountORMDo) Last() (*user_servicev1.BusinessAccountORM, error) {
	if result, err := b.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.BusinessAccountORM), nil
	}
}

func (b businessAccountORMDo) Find() ([]*user_servicev1.BusinessAccountORM, error) {
	result, err := b.DO.Find()
	return result.([]*user_servicev1.BusinessAccountORM), err
}

func (b businessAccountORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*user_servicev1.BusinessAccountORM, err error) {
	buf := make([]*user_servicev1.BusinessAccountORM, 0, batchSize)
	err = b.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (b businessAccountORMDo) FindInBatches(result *[]*user_servicev1.BusinessAccountORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return b.DO.FindInBatches(result, batchSize, fc)
}

func (b businessAccountORMDo) Attrs(attrs ...field.AssignExpr) IBusinessAccountORMDo {
	return b.withDO(b.DO.Attrs(attrs...))
}

func (b businessAccountORMDo) Assign(attrs ...field.AssignExpr) IBusinessAccountORMDo {
	return b.withDO(b.DO.Assign(attrs...))
}

func (b businessAccountORMDo) Joins(fields ...field.RelationField) IBusinessAccountORMDo {
	for _, _f := range fields {
		b = *b.withDO(b.DO.Joins(_f))
	}
	return &b
}

func (b businessAccountORMDo) Preload(fields ...field.RelationField) IBusinessAccountORMDo {
	for _, _f := range fields {
		b = *b.withDO(b.DO.Preload(_f))
	}
	return &b
}

func (b businessAccountORMDo) FirstOrInit() (*user_servicev1.BusinessAccountORM, error) {
	if result, err := b.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.BusinessAccountORM), nil
	}
}

func (b businessAccountORMDo) FirstOrCreate() (*user_servicev1.BusinessAccountORM, error) {
	if result, err := b.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.BusinessAccountORM), nil
	}
}

func (b businessAccountORMDo) FindByPage(offset int, limit int) (result []*user_servicev1.BusinessAccountORM, count int64, err error) {
	result, err = b.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = b.Offset(-1).Limit(-1).Count()
	return
}

func (b businessAccountORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = b.Count()
	if err != nil {
		return
	}

	err = b.Offset(offset).Limit(limit).Scan(result)
	return
}

func (b businessAccountORMDo) Scan(result interface{}) (err error) {
	return b.DO.Scan(result)
}

func (b businessAccountORMDo) Delete(models ...*user_servicev1.BusinessAccountORM) (result gen.ResultInfo, err error) {
	return b.DO.Delete(models)
}

func (b *businessAccountORMDo) withDO(do gen.Dao) *businessAccountORMDo {
	b.DO = *do.(*gen.DO)
	return b
}
