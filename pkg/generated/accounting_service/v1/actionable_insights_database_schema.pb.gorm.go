package accounting_servicev1

import (
	context "context"
	fmt "fmt"
	strings "strings"
	time "time"

	gorm1 "github.com/infobloxopen/atlas-app-toolkit/gorm"
	errors "github.com/infobloxopen/protoc-gen-gorm/errors"
	gorm "github.com/jinzhu/gorm"
	pq "github.com/lib/pq"
	field_mask "google.golang.org/genproto/protobuf/field_mask"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
)

type BusinessActionableInsightORM struct {
	Action                 string
	Description            string
	ExpectedBenefit        string
	GeneratedTime          *time.Time
	Id                     uint64 `gorm:"unique_index:idx_merge_business_profiles_id"`
	MergeBusinessProfileId *uint64
	MetricsToOptimizeFor   pq.StringArray `gorm:"type:text[]"`
	Tags                   pq.StringArray `gorm:"type:text[]"`
	Takeaway               string
	Type                   string
}

// TableName overrides the default tablename generated by GORM
func (BusinessActionableInsightORM) TableName() string {
	return "business_actionable_insights"
}

// ToORM runs the BeforeToORM hook if present, converts the fields of this
// object to ORM format, runs the AfterToORM hook, then returns the ORM object
func (m *BusinessActionableInsight) ToORM(ctx context.Context) (BusinessActionableInsightORM, error) {
	to := BusinessActionableInsightORM{}
	var err error
	if prehook, ok := interface{}(m).(BusinessActionableInsightWithBeforeToORM); ok {
		if err = prehook.BeforeToORM(ctx, &to); err != nil {
			return to, err
		}
	}
	to.Id = m.Id
	to.Type = BusinessActionableInsightType_name[int32(m.Type)]
	to.Description = m.Description
	to.Takeaway = m.Takeaway
	to.Action = m.Action
	to.ExpectedBenefit = m.ExpectedBenefit
	if m.Tags != nil {
		to.Tags = make(pq.StringArray, len(m.Tags))
		copy(to.Tags, m.Tags)
	}
	if m.GeneratedTime != nil {
		t := m.GeneratedTime.AsTime()
		to.GeneratedTime = &t
	}
	if m.MetricsToOptimizeFor != nil {
		to.MetricsToOptimizeFor = make(pq.StringArray, len(m.MetricsToOptimizeFor))
		copy(to.MetricsToOptimizeFor, m.MetricsToOptimizeFor)
	}
	if posthook, ok := interface{}(m).(BusinessActionableInsightWithAfterToORM); ok {
		err = posthook.AfterToORM(ctx, &to)
	}
	return to, err
}

// ToPB runs the BeforeToPB hook if present, converts the fields of this
// object to PB format, runs the AfterToPB hook, then returns the PB object
func (m *BusinessActionableInsightORM) ToPB(ctx context.Context) (BusinessActionableInsight, error) {
	to := BusinessActionableInsight{}
	var err error
	if prehook, ok := interface{}(m).(BusinessActionableInsightWithBeforeToPB); ok {
		if err = prehook.BeforeToPB(ctx, &to); err != nil {
			return to, err
		}
	}
	to.Id = m.Id
	to.Type = BusinessActionableInsightType(BusinessActionableInsightType_value[m.Type])
	to.Description = m.Description
	to.Takeaway = m.Takeaway
	to.Action = m.Action
	to.ExpectedBenefit = m.ExpectedBenefit
	if m.Tags != nil {
		to.Tags = make(pq.StringArray, len(m.Tags))
		copy(to.Tags, m.Tags)
	}
	if m.GeneratedTime != nil {
		to.GeneratedTime = timestamppb.New(*m.GeneratedTime)
	}
	if m.MetricsToOptimizeFor != nil {
		to.MetricsToOptimizeFor = make(pq.StringArray, len(m.MetricsToOptimizeFor))
		copy(to.MetricsToOptimizeFor, m.MetricsToOptimizeFor)
	}
	if posthook, ok := interface{}(m).(BusinessActionableInsightWithAfterToPB); ok {
		err = posthook.AfterToPB(ctx, &to)
	}
	return to, err
}

// The following are interfaces you can implement for special behavior during ORM/PB conversions
// of type BusinessActionableInsight the arg will be the target, the caller the one being converted from

// BusinessActionableInsightBeforeToORM called before default ToORM code
type BusinessActionableInsightWithBeforeToORM interface {
	BeforeToORM(context.Context, *BusinessActionableInsightORM) error
}

// BusinessActionableInsightAfterToORM called after default ToORM code
type BusinessActionableInsightWithAfterToORM interface {
	AfterToORM(context.Context, *BusinessActionableInsightORM) error
}

// BusinessActionableInsightBeforeToPB called before default ToPB code
type BusinessActionableInsightWithBeforeToPB interface {
	BeforeToPB(context.Context, *BusinessActionableInsight) error
}

// BusinessActionableInsightAfterToPB called after default ToPB code
type BusinessActionableInsightWithAfterToPB interface {
	AfterToPB(context.Context, *BusinessActionableInsight) error
}

// DefaultCreateBusinessActionableInsight executes a basic gorm create call
func DefaultCreateBusinessActionableInsight(ctx context.Context, in *BusinessActionableInsight, db *gorm.DB) (*BusinessActionableInsight, error) {
	if in == nil {
		return nil, errors.NilArgumentError
	}
	ormObj, err := in.ToORM(ctx)
	if err != nil {
		return nil, err
	}
	if hook, ok := interface{}(&ormObj).(BusinessActionableInsightORMWithBeforeCreate_); ok {
		if db, err = hook.BeforeCreate_(ctx, db); err != nil {
			return nil, err
		}
	}
	if err = db.Create(&ormObj).Error; err != nil {
		return nil, err
	}
	if hook, ok := interface{}(&ormObj).(BusinessActionableInsightORMWithAfterCreate_); ok {
		if err = hook.AfterCreate_(ctx, db); err != nil {
			return nil, err
		}
	}
	pbResponse, err := ormObj.ToPB(ctx)
	return &pbResponse, err
}

type BusinessActionableInsightORMWithBeforeCreate_ interface {
	BeforeCreate_(context.Context, *gorm.DB) (*gorm.DB, error)
}
type BusinessActionableInsightORMWithAfterCreate_ interface {
	AfterCreate_(context.Context, *gorm.DB) error
}

func DefaultReadBusinessActionableInsight(ctx context.Context, in *BusinessActionableInsight, db *gorm.DB) (*BusinessActionableInsight, error) {
	if in == nil {
		return nil, errors.NilArgumentError
	}
	ormObj, err := in.ToORM(ctx)
	if err != nil {
		return nil, err
	}
	if ormObj.Id == 0 {
		return nil, errors.EmptyIdError
	}
	if hook, ok := interface{}(&ormObj).(BusinessActionableInsightORMWithBeforeReadApplyQuery); ok {
		if db, err = hook.BeforeReadApplyQuery(ctx, db); err != nil {
			return nil, err
		}
	}
	if db, err = gorm1.ApplyFieldSelection(ctx, db, nil, &BusinessActionableInsightORM{}); err != nil {
		return nil, err
	}
	if hook, ok := interface{}(&ormObj).(BusinessActionableInsightORMWithBeforeReadFind); ok {
		if db, err = hook.BeforeReadFind(ctx, db); err != nil {
			return nil, err
		}
	}
	ormResponse := BusinessActionableInsightORM{}
	if err = db.Where(&ormObj).First(&ormResponse).Error; err != nil {
		return nil, err
	}
	if hook, ok := interface{}(&ormResponse).(BusinessActionableInsightORMWithAfterReadFind); ok {
		if err = hook.AfterReadFind(ctx, db); err != nil {
			return nil, err
		}
	}
	pbResponse, err := ormResponse.ToPB(ctx)
	return &pbResponse, err
}

type BusinessActionableInsightORMWithBeforeReadApplyQuery interface {
	BeforeReadApplyQuery(context.Context, *gorm.DB) (*gorm.DB, error)
}
type BusinessActionableInsightORMWithBeforeReadFind interface {
	BeforeReadFind(context.Context, *gorm.DB) (*gorm.DB, error)
}
type BusinessActionableInsightORMWithAfterReadFind interface {
	AfterReadFind(context.Context, *gorm.DB) error
}

func DefaultDeleteBusinessActionableInsight(ctx context.Context, in *BusinessActionableInsight, db *gorm.DB) error {
	if in == nil {
		return errors.NilArgumentError
	}
	ormObj, err := in.ToORM(ctx)
	if err != nil {
		return err
	}
	if ormObj.Id == 0 {
		return errors.EmptyIdError
	}
	if hook, ok := interface{}(&ormObj).(BusinessActionableInsightORMWithBeforeDelete_); ok {
		if db, err = hook.BeforeDelete_(ctx, db); err != nil {
			return err
		}
	}
	err = db.Where(&ormObj).Delete(&BusinessActionableInsightORM{}).Error
	if err != nil {
		return err
	}
	if hook, ok := interface{}(&ormObj).(BusinessActionableInsightORMWithAfterDelete_); ok {
		err = hook.AfterDelete_(ctx, db)
	}
	return err
}

type BusinessActionableInsightORMWithBeforeDelete_ interface {
	BeforeDelete_(context.Context, *gorm.DB) (*gorm.DB, error)
}
type BusinessActionableInsightORMWithAfterDelete_ interface {
	AfterDelete_(context.Context, *gorm.DB) error
}

func DefaultDeleteBusinessActionableInsightSet(ctx context.Context, in []*BusinessActionableInsight, db *gorm.DB) error {
	if in == nil {
		return errors.NilArgumentError
	}
	var err error
	keys := []uint64{}
	for _, obj := range in {
		ormObj, err := obj.ToORM(ctx)
		if err != nil {
			return err
		}
		if ormObj.Id == 0 {
			return errors.EmptyIdError
		}
		keys = append(keys, ormObj.Id)
	}
	if hook, ok := (interface{}(&BusinessActionableInsightORM{})).(BusinessActionableInsightORMWithBeforeDeleteSet); ok {
		if db, err = hook.BeforeDeleteSet(ctx, in, db); err != nil {
			return err
		}
	}
	err = db.Where("id in (?)", keys).Delete(&BusinessActionableInsightORM{}).Error
	if err != nil {
		return err
	}
	if hook, ok := (interface{}(&BusinessActionableInsightORM{})).(BusinessActionableInsightORMWithAfterDeleteSet); ok {
		err = hook.AfterDeleteSet(ctx, in, db)
	}
	return err
}

type BusinessActionableInsightORMWithBeforeDeleteSet interface {
	BeforeDeleteSet(context.Context, []*BusinessActionableInsight, *gorm.DB) (*gorm.DB, error)
}
type BusinessActionableInsightORMWithAfterDeleteSet interface {
	AfterDeleteSet(context.Context, []*BusinessActionableInsight, *gorm.DB) error
}

// DefaultStrictUpdateBusinessActionableInsight clears / replaces / appends first level 1:many children and then executes a gorm update call
func DefaultStrictUpdateBusinessActionableInsight(ctx context.Context, in *BusinessActionableInsight, db *gorm.DB) (*BusinessActionableInsight, error) {
	if in == nil {
		return nil, fmt.Errorf("Nil argument to DefaultStrictUpdateBusinessActionableInsight")
	}
	ormObj, err := in.ToORM(ctx)
	if err != nil {
		return nil, err
	}
	lockedRow := &BusinessActionableInsightORM{}
	db.Model(&ormObj).Set("gorm:query_option", "FOR UPDATE").Where("id=?", ormObj.Id).First(lockedRow)
	if hook, ok := interface{}(&ormObj).(BusinessActionableInsightORMWithBeforeStrictUpdateCleanup); ok {
		if db, err = hook.BeforeStrictUpdateCleanup(ctx, db); err != nil {
			return nil, err
		}
	}
	if hook, ok := interface{}(&ormObj).(BusinessActionableInsightORMWithBeforeStrictUpdateSave); ok {
		if db, err = hook.BeforeStrictUpdateSave(ctx, db); err != nil {
			return nil, err
		}
	}
	if err = db.Save(&ormObj).Error; err != nil {
		return nil, err
	}
	if hook, ok := interface{}(&ormObj).(BusinessActionableInsightORMWithAfterStrictUpdateSave); ok {
		if err = hook.AfterStrictUpdateSave(ctx, db); err != nil {
			return nil, err
		}
	}
	pbResponse, err := ormObj.ToPB(ctx)
	if err != nil {
		return nil, err
	}
	return &pbResponse, err
}

type BusinessActionableInsightORMWithBeforeStrictUpdateCleanup interface {
	BeforeStrictUpdateCleanup(context.Context, *gorm.DB) (*gorm.DB, error)
}
type BusinessActionableInsightORMWithBeforeStrictUpdateSave interface {
	BeforeStrictUpdateSave(context.Context, *gorm.DB) (*gorm.DB, error)
}
type BusinessActionableInsightORMWithAfterStrictUpdateSave interface {
	AfterStrictUpdateSave(context.Context, *gorm.DB) error
}

// DefaultPatchBusinessActionableInsight executes a basic gorm update call with patch behavior
func DefaultPatchBusinessActionableInsight(ctx context.Context, in *BusinessActionableInsight, updateMask *field_mask.FieldMask, db *gorm.DB) (*BusinessActionableInsight, error) {
	if in == nil {
		return nil, errors.NilArgumentError
	}
	var pbObj BusinessActionableInsight
	var err error
	if hook, ok := interface{}(&pbObj).(BusinessActionableInsightWithBeforePatchRead); ok {
		if db, err = hook.BeforePatchRead(ctx, in, updateMask, db); err != nil {
			return nil, err
		}
	}
	pbReadRes, err := DefaultReadBusinessActionableInsight(ctx, &BusinessActionableInsight{Id: in.GetId()}, db)
	if err != nil {
		return nil, err
	}
	pbObj = *pbReadRes
	if hook, ok := interface{}(&pbObj).(BusinessActionableInsightWithBeforePatchApplyFieldMask); ok {
		if db, err = hook.BeforePatchApplyFieldMask(ctx, in, updateMask, db); err != nil {
			return nil, err
		}
	}
	if _, err := DefaultApplyFieldMaskBusinessActionableInsight(ctx, &pbObj, in, updateMask, "", db); err != nil {
		return nil, err
	}
	if hook, ok := interface{}(&pbObj).(BusinessActionableInsightWithBeforePatchSave); ok {
		if db, err = hook.BeforePatchSave(ctx, in, updateMask, db); err != nil {
			return nil, err
		}
	}
	pbResponse, err := DefaultStrictUpdateBusinessActionableInsight(ctx, &pbObj, db)
	if err != nil {
		return nil, err
	}
	if hook, ok := interface{}(pbResponse).(BusinessActionableInsightWithAfterPatchSave); ok {
		if err = hook.AfterPatchSave(ctx, in, updateMask, db); err != nil {
			return nil, err
		}
	}
	return pbResponse, nil
}

type BusinessActionableInsightWithBeforePatchRead interface {
	BeforePatchRead(context.Context, *BusinessActionableInsight, *field_mask.FieldMask, *gorm.DB) (*gorm.DB, error)
}
type BusinessActionableInsightWithBeforePatchApplyFieldMask interface {
	BeforePatchApplyFieldMask(context.Context, *BusinessActionableInsight, *field_mask.FieldMask, *gorm.DB) (*gorm.DB, error)
}
type BusinessActionableInsightWithBeforePatchSave interface {
	BeforePatchSave(context.Context, *BusinessActionableInsight, *field_mask.FieldMask, *gorm.DB) (*gorm.DB, error)
}
type BusinessActionableInsightWithAfterPatchSave interface {
	AfterPatchSave(context.Context, *BusinessActionableInsight, *field_mask.FieldMask, *gorm.DB) error
}

// DefaultPatchSetBusinessActionableInsight executes a bulk gorm update call with patch behavior
func DefaultPatchSetBusinessActionableInsight(ctx context.Context, objects []*BusinessActionableInsight, updateMasks []*field_mask.FieldMask, db *gorm.DB) ([]*BusinessActionableInsight, error) {
	if len(objects) != len(updateMasks) {
		return nil, fmt.Errorf(errors.BadRepeatedFieldMaskTpl, len(updateMasks), len(objects))
	}

	results := make([]*BusinessActionableInsight, 0, len(objects))
	for i, patcher := range objects {
		pbResponse, err := DefaultPatchBusinessActionableInsight(ctx, patcher, updateMasks[i], db)
		if err != nil {
			return nil, err
		}

		results = append(results, pbResponse)
	}

	return results, nil
}

// DefaultApplyFieldMaskBusinessActionableInsight patches an pbObject with patcher according to a field mask.
func DefaultApplyFieldMaskBusinessActionableInsight(ctx context.Context, patchee *BusinessActionableInsight, patcher *BusinessActionableInsight, updateMask *field_mask.FieldMask, prefix string, db *gorm.DB) (*BusinessActionableInsight, error) {
	if patcher == nil {
		return nil, nil
	} else if patchee == nil {
		return nil, errors.NilArgumentError
	}
	var err error
	var updatedGeneratedTime bool
	for i, f := range updateMask.Paths {
		if f == prefix+"Id" {
			patchee.Id = patcher.Id
			continue
		}
		if f == prefix+"Type" {
			patchee.Type = patcher.Type
			continue
		}
		if f == prefix+"Description" {
			patchee.Description = patcher.Description
			continue
		}
		if f == prefix+"Takeaway" {
			patchee.Takeaway = patcher.Takeaway
			continue
		}
		if f == prefix+"Action" {
			patchee.Action = patcher.Action
			continue
		}
		if f == prefix+"ExpectedBenefit" {
			patchee.ExpectedBenefit = patcher.ExpectedBenefit
			continue
		}
		if f == prefix+"Tags" {
			patchee.Tags = patcher.Tags
			continue
		}
		if !updatedGeneratedTime && strings.HasPrefix(f, prefix+"GeneratedTime.") {
			if patcher.GeneratedTime == nil {
				patchee.GeneratedTime = nil
				continue
			}
			if patchee.GeneratedTime == nil {
				patchee.GeneratedTime = &timestamppb.Timestamp{}
			}
			childMask := &field_mask.FieldMask{}
			for j := i; j < len(updateMask.Paths); j++ {
				if trimPath := strings.TrimPrefix(updateMask.Paths[j], prefix+"GeneratedTime."); trimPath != updateMask.Paths[j] {
					childMask.Paths = append(childMask.Paths, trimPath)
				}
			}
			if err := gorm1.MergeWithMask(patcher.GeneratedTime, patchee.GeneratedTime, childMask); err != nil {
				return nil, nil
			}
		}
		if f == prefix+"GeneratedTime" {
			updatedGeneratedTime = true
			patchee.GeneratedTime = patcher.GeneratedTime
			continue
		}
		if f == prefix+"MetricsToOptimizeFor" {
			patchee.MetricsToOptimizeFor = patcher.MetricsToOptimizeFor
			continue
		}
	}
	if err != nil {
		return nil, err
	}
	return patchee, nil
}

// DefaultListBusinessActionableInsight executes a gorm list call
func DefaultListBusinessActionableInsight(ctx context.Context, db *gorm.DB) ([]*BusinessActionableInsight, error) {
	in := BusinessActionableInsight{}
	ormObj, err := in.ToORM(ctx)
	if err != nil {
		return nil, err
	}
	if hook, ok := interface{}(&ormObj).(BusinessActionableInsightORMWithBeforeListApplyQuery); ok {
		if db, err = hook.BeforeListApplyQuery(ctx, db); err != nil {
			return nil, err
		}
	}
	db, err = gorm1.ApplyCollectionOperators(ctx, db, &BusinessActionableInsightORM{}, &BusinessActionableInsight{}, nil, nil, nil, nil)
	if err != nil {
		return nil, err
	}
	if hook, ok := interface{}(&ormObj).(BusinessActionableInsightORMWithBeforeListFind); ok {
		if db, err = hook.BeforeListFind(ctx, db); err != nil {
			return nil, err
		}
	}
	db = db.Where(&ormObj)
	db = db.Order("id")
	ormResponse := []BusinessActionableInsightORM{}
	if err := db.Find(&ormResponse).Error; err != nil {
		return nil, err
	}
	if hook, ok := interface{}(&ormObj).(BusinessActionableInsightORMWithAfterListFind); ok {
		if err = hook.AfterListFind(ctx, db, &ormResponse); err != nil {
			return nil, err
		}
	}
	pbResponse := []*BusinessActionableInsight{}
	for _, responseEntry := range ormResponse {
		temp, err := responseEntry.ToPB(ctx)
		if err != nil {
			return nil, err
		}
		pbResponse = append(pbResponse, &temp)
	}
	return pbResponse, nil
}

type BusinessActionableInsightORMWithBeforeListApplyQuery interface {
	BeforeListApplyQuery(context.Context, *gorm.DB) (*gorm.DB, error)
}
type BusinessActionableInsightORMWithBeforeListFind interface {
	BeforeListFind(context.Context, *gorm.DB) (*gorm.DB, error)
}
type BusinessActionableInsightORMWithAfterListFind interface {
	AfterListFind(context.Context, *gorm.DB, *[]BusinessActionableInsightORM) error
}
