// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"
	"strings"

	social_servicev2 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/social_service/v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"
	"gorm.io/gen/helper"

	"gorm.io/plugin/dbresolver"
)

func newUserProfileORM(db *gorm.DB, opts ...gen.DOOption) userProfileORM {
	_userProfileORM := userProfileORM{}

	_userProfileORM.userProfileORMDo.UseDB(db, opts...)
	_userProfileORM.userProfileORMDo.UseModel(&social_servicev2.UserProfileORM{})

	tableName := _userProfileORM.userProfileORMDo.TableName()
	_userProfileORM.ALL = field.NewAsterisk(tableName)
	_userProfileORM.AdminPublicationId = field.NewUint64(tableName, "admin_publication_id")
	_userProfileORM.AlgoliaId = field.NewString(tableName, "algolia_id")
	_userProfileORM.BookmarkId = field.NewUint64(tableName, "bookmark_id")
	_userProfileORM.EditorsPublicationId = field.NewUint64(tableName, "editors_publication_id")
	_userProfileORM.Followers = field.NewInt64(tableName, "followers")
	_userProfileORM.Following = field.NewInt64(tableName, "following")
	_userProfileORM.Id = field.NewUint64(tableName, "id")
	_userProfileORM.Name = field.NewString(tableName, "name")
	_userProfileORM.NewsFeedTimelineId = field.NewString(tableName, "news_feed_timeline_id")
	_userProfileORM.NotificationFeedTimelineId = field.NewString(tableName, "notification_feed_timeline_id")
	_userProfileORM.PersonalFeedTimelineId = field.NewString(tableName, "personal_feed_timeline_id")
	_userProfileORM.Private = field.NewBool(tableName, "private")
	_userProfileORM.ProfileImageUrl = field.NewString(tableName, "profile_image_url")
	_userProfileORM.VirtualProfileId = field.NewUint64(tableName, "virtual_profile_id")
	_userProfileORM.Tags = userProfileORMHasManyTags{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Tags", "social_servicev2.UserTagsORM"),
	}

	_userProfileORM.Bookmarks = userProfileORMBelongsToBookmarks{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Bookmarks", "social_servicev2.BookmarkORM"),
		Publications: struct {
			field.RelationField
			Admin struct {
				field.RelationField
				Bookmarks struct {
					field.RelationField
				}
				Tags struct {
					field.RelationField
				}
			}
			Editors struct {
				field.RelationField
			}
		}{
			RelationField: field.NewRelation("Bookmarks.Publications", "social_servicev2.PublicationORM"),
			Admin: struct {
				field.RelationField
				Bookmarks struct {
					field.RelationField
				}
				Tags struct {
					field.RelationField
				}
			}{
				RelationField: field.NewRelation("Bookmarks.Publications.Admin", "social_servicev2.UserProfileORM"),
				Bookmarks: struct {
					field.RelationField
				}{
					RelationField: field.NewRelation("Bookmarks.Publications.Admin.Bookmarks", "social_servicev2.BookmarkORM"),
				},
				Tags: struct {
					field.RelationField
				}{
					RelationField: field.NewRelation("Bookmarks.Publications.Admin.Tags", "social_servicev2.UserTagsORM"),
				},
			},
			Editors: struct {
				field.RelationField
			}{
				RelationField: field.NewRelation("Bookmarks.Publications.Editors", "social_servicev2.UserProfileORM"),
			},
		},
	}

	_userProfileORM.fillFieldMap()

	return _userProfileORM
}

type userProfileORM struct {
	userProfileORMDo

	ALL                        field.Asterisk
	AdminPublicationId         field.Uint64
	AlgoliaId                  field.String
	BookmarkId                 field.Uint64
	EditorsPublicationId       field.Uint64
	Followers                  field.Int64
	Following                  field.Int64
	Id                         field.Uint64
	Name                       field.String
	NewsFeedTimelineId         field.String
	NotificationFeedTimelineId field.String
	PersonalFeedTimelineId     field.String
	Private                    field.Bool
	ProfileImageUrl            field.String
	VirtualProfileId           field.Uint64
	Tags                       userProfileORMHasManyTags

	Bookmarks userProfileORMBelongsToBookmarks

	fieldMap map[string]field.Expr
}

func (u userProfileORM) Table(newTableName string) *userProfileORM {
	u.userProfileORMDo.UseTable(newTableName)
	return u.updateTableName(newTableName)
}

func (u userProfileORM) As(alias string) *userProfileORM {
	u.userProfileORMDo.DO = *(u.userProfileORMDo.As(alias).(*gen.DO))
	return u.updateTableName(alias)
}

func (u *userProfileORM) updateTableName(table string) *userProfileORM {
	u.ALL = field.NewAsterisk(table)
	u.AdminPublicationId = field.NewUint64(table, "admin_publication_id")
	u.AlgoliaId = field.NewString(table, "algolia_id")
	u.BookmarkId = field.NewUint64(table, "bookmark_id")
	u.EditorsPublicationId = field.NewUint64(table, "editors_publication_id")
	u.Followers = field.NewInt64(table, "followers")
	u.Following = field.NewInt64(table, "following")
	u.Id = field.NewUint64(table, "id")
	u.Name = field.NewString(table, "name")
	u.NewsFeedTimelineId = field.NewString(table, "news_feed_timeline_id")
	u.NotificationFeedTimelineId = field.NewString(table, "notification_feed_timeline_id")
	u.PersonalFeedTimelineId = field.NewString(table, "personal_feed_timeline_id")
	u.Private = field.NewBool(table, "private")
	u.ProfileImageUrl = field.NewString(table, "profile_image_url")
	u.VirtualProfileId = field.NewUint64(table, "virtual_profile_id")

	u.fillFieldMap()

	return u
}

func (u *userProfileORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := u.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (u *userProfileORM) fillFieldMap() {
	u.fieldMap = make(map[string]field.Expr, 16)
	u.fieldMap["admin_publication_id"] = u.AdminPublicationId
	u.fieldMap["algolia_id"] = u.AlgoliaId
	u.fieldMap["bookmark_id"] = u.BookmarkId
	u.fieldMap["editors_publication_id"] = u.EditorsPublicationId
	u.fieldMap["followers"] = u.Followers
	u.fieldMap["following"] = u.Following
	u.fieldMap["id"] = u.Id
	u.fieldMap["name"] = u.Name
	u.fieldMap["news_feed_timeline_id"] = u.NewsFeedTimelineId
	u.fieldMap["notification_feed_timeline_id"] = u.NotificationFeedTimelineId
	u.fieldMap["personal_feed_timeline_id"] = u.PersonalFeedTimelineId
	u.fieldMap["private"] = u.Private
	u.fieldMap["profile_image_url"] = u.ProfileImageUrl
	u.fieldMap["virtual_profile_id"] = u.VirtualProfileId

}

func (u userProfileORM) clone(db *gorm.DB) userProfileORM {
	u.userProfileORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return u
}

func (u userProfileORM) replaceDB(db *gorm.DB) userProfileORM {
	u.userProfileORMDo.ReplaceDB(db)
	return u
}

type userProfileORMHasManyTags struct {
	db *gorm.DB

	field.RelationField
}

func (a userProfileORMHasManyTags) Where(conds ...field.Expr) *userProfileORMHasManyTags {
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

func (a userProfileORMHasManyTags) WithContext(ctx context.Context) *userProfileORMHasManyTags {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a userProfileORMHasManyTags) Session(session *gorm.Session) *userProfileORMHasManyTags {
	a.db = a.db.Session(session)
	return &a
}

func (a userProfileORMHasManyTags) Model(m *social_servicev2.UserProfileORM) *userProfileORMHasManyTagsTx {
	return &userProfileORMHasManyTagsTx{a.db.Model(m).Association(a.Name())}
}

type userProfileORMHasManyTagsTx struct{ tx *gorm.Association }

func (a userProfileORMHasManyTagsTx) Find() (result []*social_servicev2.UserTagsORM, err error) {
	return result, a.tx.Find(&result)
}

func (a userProfileORMHasManyTagsTx) Append(values ...*social_servicev2.UserTagsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a userProfileORMHasManyTagsTx) Replace(values ...*social_servicev2.UserTagsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a userProfileORMHasManyTagsTx) Delete(values ...*social_servicev2.UserTagsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a userProfileORMHasManyTagsTx) Clear() error {
	return a.tx.Clear()
}

func (a userProfileORMHasManyTagsTx) Count() int64 {
	return a.tx.Count()
}

type userProfileORMBelongsToBookmarks struct {
	db *gorm.DB

	field.RelationField

	Publications struct {
		field.RelationField
		Admin struct {
			field.RelationField
			Bookmarks struct {
				field.RelationField
			}
			Tags struct {
				field.RelationField
			}
		}
		Editors struct {
			field.RelationField
		}
	}
}

func (a userProfileORMBelongsToBookmarks) Where(conds ...field.Expr) *userProfileORMBelongsToBookmarks {
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

func (a userProfileORMBelongsToBookmarks) WithContext(ctx context.Context) *userProfileORMBelongsToBookmarks {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a userProfileORMBelongsToBookmarks) Session(session *gorm.Session) *userProfileORMBelongsToBookmarks {
	a.db = a.db.Session(session)
	return &a
}

func (a userProfileORMBelongsToBookmarks) Model(m *social_servicev2.UserProfileORM) *userProfileORMBelongsToBookmarksTx {
	return &userProfileORMBelongsToBookmarksTx{a.db.Model(m).Association(a.Name())}
}

type userProfileORMBelongsToBookmarksTx struct{ tx *gorm.Association }

func (a userProfileORMBelongsToBookmarksTx) Find() (result *social_servicev2.BookmarkORM, err error) {
	return result, a.tx.Find(&result)
}

func (a userProfileORMBelongsToBookmarksTx) Append(values ...*social_servicev2.BookmarkORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a userProfileORMBelongsToBookmarksTx) Replace(values ...*social_servicev2.BookmarkORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a userProfileORMBelongsToBookmarksTx) Delete(values ...*social_servicev2.BookmarkORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a userProfileORMBelongsToBookmarksTx) Clear() error {
	return a.tx.Clear()
}

func (a userProfileORMBelongsToBookmarksTx) Count() int64 {
	return a.tx.Count()
}

type userProfileORMDo struct{ gen.DO }

type IUserProfileORMDo interface {
	gen.SubQuery
	Debug() IUserProfileORMDo
	WithContext(ctx context.Context) IUserProfileORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IUserProfileORMDo
	WriteDB() IUserProfileORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IUserProfileORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IUserProfileORMDo
	Not(conds ...gen.Condition) IUserProfileORMDo
	Or(conds ...gen.Condition) IUserProfileORMDo
	Select(conds ...field.Expr) IUserProfileORMDo
	Where(conds ...gen.Condition) IUserProfileORMDo
	Order(conds ...field.Expr) IUserProfileORMDo
	Distinct(cols ...field.Expr) IUserProfileORMDo
	Omit(cols ...field.Expr) IUserProfileORMDo
	Join(table schema.Tabler, on ...field.Expr) IUserProfileORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IUserProfileORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IUserProfileORMDo
	Group(cols ...field.Expr) IUserProfileORMDo
	Having(conds ...gen.Condition) IUserProfileORMDo
	Limit(limit int) IUserProfileORMDo
	Offset(offset int) IUserProfileORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IUserProfileORMDo
	Unscoped() IUserProfileORMDo
	Create(values ...*social_servicev2.UserProfileORM) error
	CreateInBatches(values []*social_servicev2.UserProfileORM, batchSize int) error
	Save(values ...*social_servicev2.UserProfileORM) error
	First() (*social_servicev2.UserProfileORM, error)
	Take() (*social_servicev2.UserProfileORM, error)
	Last() (*social_servicev2.UserProfileORM, error)
	Find() ([]*social_servicev2.UserProfileORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*social_servicev2.UserProfileORM, err error)
	FindInBatches(result *[]*social_servicev2.UserProfileORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*social_servicev2.UserProfileORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IUserProfileORMDo
	Assign(attrs ...field.AssignExpr) IUserProfileORMDo
	Joins(fields ...field.RelationField) IUserProfileORMDo
	Preload(fields ...field.RelationField) IUserProfileORMDo
	FirstOrInit() (*social_servicev2.UserProfileORM, error)
	FirstOrCreate() (*social_servicev2.UserProfileORM, error)
	FindByPage(offset int, limit int) (result []*social_servicev2.UserProfileORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IUserProfileORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result social_servicev2.UserProfileORM, err error)
	GetRecordByIDs(ids []int) (result []social_servicev2.UserProfileORM, err error)
	CreateRecord(item social_servicev2.UserProfileORM) (err error)
	UpdateRecordByID(id int, item social_servicev2.UserProfileORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []social_servicev2.UserProfileORM, err error)
	CountAll() (result int, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (u userProfileORMDo) GetRecordByID(id int) (result social_servicev2.UserProfileORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM user_profiles ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = u.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (u userProfileORMDo) GetRecordByIDs(ids []int) (result []social_servicev2.UserProfileORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM user_profiles ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = u.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (u userProfileORMDo) CreateRecord(item social_servicev2.UserProfileORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO user_profiles (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = u.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (u userProfileORMDo) UpdateRecordByID(id int, item social_servicev2.UserProfileORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE user_profiles SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = u.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (u userProfileORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM user_profiles ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = u.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (u userProfileORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []social_servicev2.UserProfileORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM user_profiles ORDER BY " + u.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = u.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (u userProfileORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM user_profiles ")

	var executeSQL *gorm.DB
	executeSQL = u.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (u userProfileORMDo) Debug() IUserProfileORMDo {
	return u.withDO(u.DO.Debug())
}

func (u userProfileORMDo) WithContext(ctx context.Context) IUserProfileORMDo {
	return u.withDO(u.DO.WithContext(ctx))
}

func (u userProfileORMDo) ReadDB() IUserProfileORMDo {
	return u.Clauses(dbresolver.Read)
}

func (u userProfileORMDo) WriteDB() IUserProfileORMDo {
	return u.Clauses(dbresolver.Write)
}

func (u userProfileORMDo) Session(config *gorm.Session) IUserProfileORMDo {
	return u.withDO(u.DO.Session(config))
}

func (u userProfileORMDo) Clauses(conds ...clause.Expression) IUserProfileORMDo {
	return u.withDO(u.DO.Clauses(conds...))
}

func (u userProfileORMDo) Returning(value interface{}, columns ...string) IUserProfileORMDo {
	return u.withDO(u.DO.Returning(value, columns...))
}

func (u userProfileORMDo) Not(conds ...gen.Condition) IUserProfileORMDo {
	return u.withDO(u.DO.Not(conds...))
}

func (u userProfileORMDo) Or(conds ...gen.Condition) IUserProfileORMDo {
	return u.withDO(u.DO.Or(conds...))
}

func (u userProfileORMDo) Select(conds ...field.Expr) IUserProfileORMDo {
	return u.withDO(u.DO.Select(conds...))
}

func (u userProfileORMDo) Where(conds ...gen.Condition) IUserProfileORMDo {
	return u.withDO(u.DO.Where(conds...))
}

func (u userProfileORMDo) Order(conds ...field.Expr) IUserProfileORMDo {
	return u.withDO(u.DO.Order(conds...))
}

func (u userProfileORMDo) Distinct(cols ...field.Expr) IUserProfileORMDo {
	return u.withDO(u.DO.Distinct(cols...))
}

func (u userProfileORMDo) Omit(cols ...field.Expr) IUserProfileORMDo {
	return u.withDO(u.DO.Omit(cols...))
}

func (u userProfileORMDo) Join(table schema.Tabler, on ...field.Expr) IUserProfileORMDo {
	return u.withDO(u.DO.Join(table, on...))
}

func (u userProfileORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IUserProfileORMDo {
	return u.withDO(u.DO.LeftJoin(table, on...))
}

func (u userProfileORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IUserProfileORMDo {
	return u.withDO(u.DO.RightJoin(table, on...))
}

func (u userProfileORMDo) Group(cols ...field.Expr) IUserProfileORMDo {
	return u.withDO(u.DO.Group(cols...))
}

func (u userProfileORMDo) Having(conds ...gen.Condition) IUserProfileORMDo {
	return u.withDO(u.DO.Having(conds...))
}

func (u userProfileORMDo) Limit(limit int) IUserProfileORMDo {
	return u.withDO(u.DO.Limit(limit))
}

func (u userProfileORMDo) Offset(offset int) IUserProfileORMDo {
	return u.withDO(u.DO.Offset(offset))
}

func (u userProfileORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IUserProfileORMDo {
	return u.withDO(u.DO.Scopes(funcs...))
}

func (u userProfileORMDo) Unscoped() IUserProfileORMDo {
	return u.withDO(u.DO.Unscoped())
}

func (u userProfileORMDo) Create(values ...*social_servicev2.UserProfileORM) error {
	if len(values) == 0 {
		return nil
	}
	return u.DO.Create(values)
}

func (u userProfileORMDo) CreateInBatches(values []*social_servicev2.UserProfileORM, batchSize int) error {
	return u.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (u userProfileORMDo) Save(values ...*social_servicev2.UserProfileORM) error {
	if len(values) == 0 {
		return nil
	}
	return u.DO.Save(values)
}

func (u userProfileORMDo) First() (*social_servicev2.UserProfileORM, error) {
	if result, err := u.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.UserProfileORM), nil
	}
}

func (u userProfileORMDo) Take() (*social_servicev2.UserProfileORM, error) {
	if result, err := u.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.UserProfileORM), nil
	}
}

func (u userProfileORMDo) Last() (*social_servicev2.UserProfileORM, error) {
	if result, err := u.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.UserProfileORM), nil
	}
}

func (u userProfileORMDo) Find() ([]*social_servicev2.UserProfileORM, error) {
	result, err := u.DO.Find()
	return result.([]*social_servicev2.UserProfileORM), err
}

func (u userProfileORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*social_servicev2.UserProfileORM, err error) {
	buf := make([]*social_servicev2.UserProfileORM, 0, batchSize)
	err = u.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (u userProfileORMDo) FindInBatches(result *[]*social_servicev2.UserProfileORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return u.DO.FindInBatches(result, batchSize, fc)
}

func (u userProfileORMDo) Attrs(attrs ...field.AssignExpr) IUserProfileORMDo {
	return u.withDO(u.DO.Attrs(attrs...))
}

func (u userProfileORMDo) Assign(attrs ...field.AssignExpr) IUserProfileORMDo {
	return u.withDO(u.DO.Assign(attrs...))
}

func (u userProfileORMDo) Joins(fields ...field.RelationField) IUserProfileORMDo {
	for _, _f := range fields {
		u = *u.withDO(u.DO.Joins(_f))
	}
	return &u
}

func (u userProfileORMDo) Preload(fields ...field.RelationField) IUserProfileORMDo {
	for _, _f := range fields {
		u = *u.withDO(u.DO.Preload(_f))
	}
	return &u
}

func (u userProfileORMDo) FirstOrInit() (*social_servicev2.UserProfileORM, error) {
	if result, err := u.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.UserProfileORM), nil
	}
}

func (u userProfileORMDo) FirstOrCreate() (*social_servicev2.UserProfileORM, error) {
	if result, err := u.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.UserProfileORM), nil
	}
}

func (u userProfileORMDo) FindByPage(offset int, limit int) (result []*social_servicev2.UserProfileORM, count int64, err error) {
	result, err = u.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = u.Offset(-1).Limit(-1).Count()
	return
}

func (u userProfileORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = u.Count()
	if err != nil {
		return
	}

	err = u.Offset(offset).Limit(limit).Scan(result)
	return
}

func (u userProfileORMDo) Scan(result interface{}) (err error) {
	return u.DO.Scan(result)
}

func (u userProfileORMDo) Delete(models ...*social_servicev2.UserProfileORM) (result gen.ResultInfo, err error) {
	return u.DO.Delete(models)
}

func (u *userProfileORMDo) withDO(do gen.Dao) *userProfileORMDo {
	u.DO = *do.(*gen.DO)
	return u
}
