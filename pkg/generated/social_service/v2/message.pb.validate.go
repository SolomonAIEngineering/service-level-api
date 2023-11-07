// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: social_service/v2/message.proto

package social_servicev2

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"sort"
	"strings"
	"time"
	"unicode/utf8"

	"google.golang.org/protobuf/types/known/anypb"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = anypb.Any{}
	_ = sort.Sort
)

// Validate checks the field values on VirtualProfile with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *VirtualProfile) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on VirtualProfile with the rules defined
// in the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in VirtualProfileMultiError,
// or nil if none found.
func (m *VirtualProfile) ValidateAll() error {
	return m.validate(true)
}

func (m *VirtualProfile) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	if m.GetUserId() <= 0 {
		err := VirtualProfileValidationError{
			field:  "UserId",
			reason: "value must be greater than 0",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if all {
		switch v := interface{}(m.GetUser()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, VirtualProfileValidationError{
					field:  "User",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, VirtualProfileValidationError{
					field:  "User",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetUser()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return VirtualProfileValidationError{
				field:  "User",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	for idx, item := range m.GetCommunities() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, VirtualProfileValidationError{
						field:  fmt.Sprintf("Communities[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, VirtualProfileValidationError{
						field:  fmt.Sprintf("Communities[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return VirtualProfileValidationError{
					field:  fmt.Sprintf("Communities[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	// no validation rules for Activated

	// no validation rules for ProfileType

	if len(errors) > 0 {
		return VirtualProfileMultiError(errors)
	}

	return nil
}

// VirtualProfileMultiError is an error wrapping multiple validation errors
// returned by VirtualProfile.ValidateAll() if the designated constraints
// aren't met.
type VirtualProfileMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m VirtualProfileMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m VirtualProfileMultiError) AllErrors() []error { return m }

// VirtualProfileValidationError is the validation error returned by
// VirtualProfile.Validate if the designated constraints aren't met.
type VirtualProfileValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e VirtualProfileValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e VirtualProfileValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e VirtualProfileValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e VirtualProfileValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e VirtualProfileValidationError) ErrorName() string { return "VirtualProfileValidationError" }

// Error satisfies the builtin error interface
func (e VirtualProfileValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sVirtualProfile.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = VirtualProfileValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = VirtualProfileValidationError{}

// Validate checks the field values on UserProfile with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *UserProfile) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on UserProfile with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in UserProfileMultiError, or
// nil if none found.
func (m *UserProfile) ValidateAll() error {
	return m.validate(true)
}

func (m *UserProfile) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	for idx, item := range m.GetTags() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, UserProfileValidationError{
						field:  fmt.Sprintf("Tags[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, UserProfileValidationError{
						field:  fmt.Sprintf("Tags[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return UserProfileValidationError{
					field:  fmt.Sprintf("Tags[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if len(m.GetName()) < 5 {
		err := UserProfileValidationError{
			field:  "Name",
			reason: "value length must be at least 5 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	// no validation rules for Private

	// no validation rules for Followers

	// no validation rules for Following

	if len(m.GetNotificationFeedTimelineId()) < 1 {
		err := UserProfileValidationError{
			field:  "NotificationFeedTimelineId",
			reason: "value length must be at least 1 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(m.GetPersonalFeedTimelineId()) < 1 {
		err := UserProfileValidationError{
			field:  "PersonalFeedTimelineId",
			reason: "value length must be at least 1 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(m.GetNewsFeedTimelineId()) < 1 {
		err := UserProfileValidationError{
			field:  "NewsFeedTimelineId",
			reason: "value length must be at least 1 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(m.GetProfileImageUrl()) < 1 {
		err := UserProfileValidationError{
			field:  "ProfileImageUrl",
			reason: "value length must be at least 1 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if all {
		switch v := interface{}(m.GetBookmarks()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, UserProfileValidationError{
					field:  "Bookmarks",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, UserProfileValidationError{
					field:  "Bookmarks",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetBookmarks()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return UserProfileValidationError{
				field:  "Bookmarks",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(m.GetAlgoliaId()) < 0 {
		err := UserProfileValidationError{
			field:  "AlgoliaId",
			reason: "value length must be at least 0 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(errors) > 0 {
		return UserProfileMultiError(errors)
	}

	return nil
}

// UserProfileMultiError is an error wrapping multiple validation errors
// returned by UserProfile.ValidateAll() if the designated constraints aren't met.
type UserProfileMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m UserProfileMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m UserProfileMultiError) AllErrors() []error { return m }

// UserProfileValidationError is the validation error returned by
// UserProfile.Validate if the designated constraints aren't met.
type UserProfileValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e UserProfileValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e UserProfileValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e UserProfileValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e UserProfileValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e UserProfileValidationError) ErrorName() string { return "UserProfileValidationError" }

// Error satisfies the builtin error interface
func (e UserProfileValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sUserProfile.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = UserProfileValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = UserProfileValidationError{}

// Validate checks the field values on CommunityProfile with the rules defined
// in the proto definition for this message. If any rules are violated, the
// first error encountered is returned, or nil if there are no violations.
func (m *CommunityProfile) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on CommunityProfile with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// CommunityProfileMultiError, or nil if none found.
func (m *CommunityProfile) ValidateAll() error {
	return m.validate(true)
}

func (m *CommunityProfile) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	if len(m.GetName()) < 5 {
		err := CommunityProfileValidationError{
			field:  "Name",
			reason: "value length must be at least 5 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(m.GetDescription()) < 5 {
		err := CommunityProfileValidationError{
			field:  "Description",
			reason: "value length must be at least 5 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	// no validation rules for Private

	// no validation rules for Visible

	// no validation rules for Followers

	if len(m.GetCommunityRules()) < 5 {
		err := CommunityProfileValidationError{
			field:  "CommunityRules",
			reason: "value length must be at least 5 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(m.GetTopics()) < 1 {
		err := CommunityProfileValidationError{
			field:  "Topics",
			reason: "value must contain at least 1 item(s)",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	for idx, item := range m.GetTopics() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, CommunityProfileValidationError{
						field:  fmt.Sprintf("Topics[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, CommunityProfileValidationError{
						field:  fmt.Sprintf("Topics[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return CommunityProfileValidationError{
					field:  fmt.Sprintf("Topics[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if len(m.GetNotificationFeedTimelineId()) < 1 {
		err := CommunityProfileValidationError{
			field:  "NotificationFeedTimelineId",
			reason: "value length must be at least 1 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(m.GetPersonalFeedTimelineId()) < 1 {
		err := CommunityProfileValidationError{
			field:  "PersonalFeedTimelineId",
			reason: "value length must be at least 1 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(m.GetNewsFeedTimelineId()) < 1 {
		err := CommunityProfileValidationError{
			field:  "NewsFeedTimelineId",
			reason: "value length must be at least 1 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(m.GetProfileImageUrl()) < 1 {
		err := CommunityProfileValidationError{
			field:  "ProfileImageUrl",
			reason: "value length must be at least 1 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(m.GetAlgoliaId()) < 0 {
		err := CommunityProfileValidationError{
			field:  "AlgoliaId",
			reason: "value length must be at least 0 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(errors) > 0 {
		return CommunityProfileMultiError(errors)
	}

	return nil
}

// CommunityProfileMultiError is an error wrapping multiple validation errors
// returned by CommunityProfile.ValidateAll() if the designated constraints
// aren't met.
type CommunityProfileMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m CommunityProfileMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m CommunityProfileMultiError) AllErrors() []error { return m }

// CommunityProfileValidationError is the validation error returned by
// CommunityProfile.Validate if the designated constraints aren't met.
type CommunityProfileValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e CommunityProfileValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e CommunityProfileValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e CommunityProfileValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e CommunityProfileValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e CommunityProfileValidationError) ErrorName() string { return "CommunityProfileValidationError" }

// Error satisfies the builtin error interface
func (e CommunityProfileValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sCommunityProfile.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = CommunityProfileValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = CommunityProfileValidationError{}

// Validate checks the field values on Follower with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Follower) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Follower with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in FollowerMultiError, or nil
// if none found.
func (m *Follower) ValidateAll() error {
	return m.validate(true)
}

func (m *Follower) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	if m.GetProfileFollowedId() <= 0 {
		err := FollowerValidationError{
			field:  "ProfileFollowedId",
			reason: "value must be greater than 0",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if m.GetProfileFollowingId() <= 0 {
		err := FollowerValidationError{
			field:  "ProfileFollowingId",
			reason: "value must be greater than 0",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	// no validation rules for RequestApproved

	// no validation rules for CreatedAt

	// no validation rules for ApprovedAt

	// no validation rules for TargetFollowerType

	if len(errors) > 0 {
		return FollowerMultiError(errors)
	}

	return nil
}

// FollowerMultiError is an error wrapping multiple validation errors returned
// by Follower.ValidateAll() if the designated constraints aren't met.
type FollowerMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m FollowerMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m FollowerMultiError) AllErrors() []error { return m }

// FollowerValidationError is the validation error returned by
// Follower.Validate if the designated constraints aren't met.
type FollowerValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e FollowerValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e FollowerValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e FollowerValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e FollowerValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e FollowerValidationError) ErrorName() string { return "FollowerValidationError" }

// Error satisfies the builtin error interface
func (e FollowerValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sFollower.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = FollowerValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = FollowerValidationError{}

// Validate checks the field values on UserTags with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *UserTags) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on UserTags with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in UserTagsMultiError, or nil
// if none found.
func (m *UserTags) ValidateAll() error {
	return m.validate(true)
}

func (m *UserTags) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	if len(m.GetTagName()) < 5 {
		err := UserTagsValidationError{
			field:  "TagName",
			reason: "value length must be at least 5 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(m.GetDescription()) < 5 {
		err := UserTagsValidationError{
			field:  "Description",
			reason: "value length must be at least 5 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(errors) > 0 {
		return UserTagsMultiError(errors)
	}

	return nil
}

// UserTagsMultiError is an error wrapping multiple validation errors returned
// by UserTags.ValidateAll() if the designated constraints aren't met.
type UserTagsMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m UserTagsMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m UserTagsMultiError) AllErrors() []error { return m }

// UserTagsValidationError is the validation error returned by
// UserTags.Validate if the designated constraints aren't met.
type UserTagsValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e UserTagsValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e UserTagsValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e UserTagsValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e UserTagsValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e UserTagsValidationError) ErrorName() string { return "UserTagsValidationError" }

// Error satisfies the builtin error interface
func (e UserTagsValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sUserTags.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = UserTagsValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = UserTagsValidationError{}

// Validate checks the field values on Topic with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Topic) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Topic with the rules defined in the
// proto definition for this message. If any rules are violated, the result is
// a list of violation errors wrapped in TopicMultiError, or nil if none found.
func (m *Topic) ValidateAll() error {
	return m.validate(true)
}

func (m *Topic) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	if len(m.GetTopicName()) < 5 {
		err := TopicValidationError{
			field:  "TopicName",
			reason: "value length must be at least 5 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(m.GetDescription()) < 5 {
		err := TopicValidationError{
			field:  "Description",
			reason: "value length must be at least 5 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(m.GetImageUrl()) < 1 {
		err := TopicValidationError{
			field:  "ImageUrl",
			reason: "value length must be at least 1 bytes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(errors) > 0 {
		return TopicMultiError(errors)
	}

	return nil
}

// TopicMultiError is an error wrapping multiple validation errors returned by
// Topic.ValidateAll() if the designated constraints aren't met.
type TopicMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m TopicMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m TopicMultiError) AllErrors() []error { return m }

// TopicValidationError is the validation error returned by Topic.Validate if
// the designated constraints aren't met.
type TopicValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TopicValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TopicValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TopicValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TopicValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TopicValidationError) ErrorName() string { return "TopicValidationError" }

// Error satisfies the builtin error interface
func (e TopicValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTopic.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TopicValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TopicValidationError{}

// Validate checks the field values on Blocked with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Blocked) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Blocked with the rules defined in the
// proto definition for this message. If any rules are violated, the result is
// a list of violation errors wrapped in BlockedMultiError, or nil if none found.
func (m *Blocked) ValidateAll() error {
	return m.validate(true)
}

func (m *Blocked) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	if m.GetProfileBlockedId() <= 0 {
		err := BlockedValidationError{
			field:  "ProfileBlockedId",
			reason: "value must be greater than 0",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if m.GetProfileBlockingId() <= 0 {
		err := BlockedValidationError{
			field:  "ProfileBlockingId",
			reason: "value must be greater than 0",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	// no validation rules for CreatedAt

	// no validation rules for ProfileBlockedType

	// no validation rules for ProfileBlockingType

	if len(errors) > 0 {
		return BlockedMultiError(errors)
	}

	return nil
}

// BlockedMultiError is an error wrapping multiple validation errors returned
// by Blocked.ValidateAll() if the designated constraints aren't met.
type BlockedMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m BlockedMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m BlockedMultiError) AllErrors() []error { return m }

// BlockedValidationError is the validation error returned by Blocked.Validate
// if the designated constraints aren't met.
type BlockedValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e BlockedValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e BlockedValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e BlockedValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e BlockedValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e BlockedValidationError) ErrorName() string { return "BlockedValidationError" }

// Error satisfies the builtin error interface
func (e BlockedValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sBlocked.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = BlockedValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = BlockedValidationError{}

// Validate checks the field values on Bookmark with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Bookmark) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Bookmark with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in BookmarkMultiError, or nil
// if none found.
func (m *Bookmark) ValidateAll() error {
	return m.validate(true)
}

func (m *Bookmark) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	for idx, item := range m.GetPublications() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, BookmarkValidationError{
						field:  fmt.Sprintf("Publications[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, BookmarkValidationError{
						field:  fmt.Sprintf("Publications[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return BookmarkValidationError{
					field:  fmt.Sprintf("Publications[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if len(errors) > 0 {
		return BookmarkMultiError(errors)
	}

	return nil
}

// BookmarkMultiError is an error wrapping multiple validation errors returned
// by Bookmark.ValidateAll() if the designated constraints aren't met.
type BookmarkMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m BookmarkMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m BookmarkMultiError) AllErrors() []error { return m }

// BookmarkValidationError is the validation error returned by
// Bookmark.Validate if the designated constraints aren't met.
type BookmarkValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e BookmarkValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e BookmarkValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e BookmarkValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e BookmarkValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e BookmarkValidationError) ErrorName() string { return "BookmarkValidationError" }

// Error satisfies the builtin error interface
func (e BookmarkValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sBookmark.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = BookmarkValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = BookmarkValidationError{}

// Validate checks the field values on Publication with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Publication) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Publication with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in PublicationMultiError, or
// nil if none found.
func (m *Publication) ValidateAll() error {
	return m.validate(true)
}

func (m *Publication) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	if len(m.GetPostIds()) > 15 {
		err := PublicationValidationError{
			field:  "PostIds",
			reason: "value must contain no more than 15 item(s)",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if m.GetAdmin() == nil {
		err := PublicationValidationError{
			field:  "Admin",
			reason: "value is required",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if all {
		switch v := interface{}(m.GetAdmin()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, PublicationValidationError{
					field:  "Admin",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, PublicationValidationError{
					field:  "Admin",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetAdmin()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return PublicationValidationError{
				field:  "Admin",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if m.GetAdminSimfinyPlatformUserId() <= 0 {
		err := PublicationValidationError{
			field:  "AdminSimfinyPlatformUserId",
			reason: "value must be greater than 0",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(m.GetTags()) < 3 {
		err := PublicationValidationError{
			field:  "Tags",
			reason: "value must contain at least 3 item(s)",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	for idx, item := range m.GetEditors() {
		_, _ = idx, item

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, PublicationValidationError{
						field:  fmt.Sprintf("Editors[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, PublicationValidationError{
						field:  fmt.Sprintf("Editors[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return PublicationValidationError{
					field:  fmt.Sprintf("Editors[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if len(m.GetSubjects()) < 3 {
		err := PublicationValidationError{
			field:  "Subjects",
			reason: "value must contain at least 3 item(s)",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if utf8.RuneCountInString(m.GetDescription()) < 1 {
		err := PublicationValidationError{
			field:  "Description",
			reason: "value length must be at least 1 runes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	// no validation rules for CreatedAt

	// no validation rules for Type

	if utf8.RuneCountInString(m.GetPublicationName()) < 1 {
		err := PublicationValidationError{
			field:  "PublicationName",
			reason: "value length must be at least 1 runes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(errors) > 0 {
		return PublicationMultiError(errors)
	}

	return nil
}

// PublicationMultiError is an error wrapping multiple validation errors
// returned by Publication.ValidateAll() if the designated constraints aren't met.
type PublicationMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m PublicationMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m PublicationMultiError) AllErrors() []error { return m }

// PublicationValidationError is the validation error returned by
// Publication.Validate if the designated constraints aren't met.
type PublicationValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e PublicationValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e PublicationValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e PublicationValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e PublicationValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e PublicationValidationError) ErrorName() string { return "PublicationValidationError" }

// Error satisfies the builtin error interface
func (e PublicationValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sPublication.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = PublicationValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = PublicationValidationError{}
