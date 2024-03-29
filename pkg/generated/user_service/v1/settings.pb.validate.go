// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: user_service/v1/settings.proto

package user_servicev1

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

// Validate checks the field values on NotificationSettings with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *NotificationSettings) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on NotificationSettings with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// NotificationSettingsMultiError, or nil if none found.
func (m *NotificationSettings) ValidateAll() error {
	return m.validate(true)
}

func (m *NotificationSettings) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	// no validation rules for NotificationType

	// no validation rules for Alerts

	if len(errors) > 0 {
		return NotificationSettingsMultiError(errors)
	}

	return nil
}

// NotificationSettingsMultiError is an error wrapping multiple validation
// errors returned by NotificationSettings.ValidateAll() if the designated
// constraints aren't met.
type NotificationSettingsMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m NotificationSettingsMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m NotificationSettingsMultiError) AllErrors() []error { return m }

// NotificationSettingsValidationError is the validation error returned by
// NotificationSettings.Validate if the designated constraints aren't met.
type NotificationSettingsValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e NotificationSettingsValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e NotificationSettingsValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e NotificationSettingsValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e NotificationSettingsValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e NotificationSettingsValidationError) ErrorName() string {
	return "NotificationSettingsValidationError"
}

// Error satisfies the builtin error interface
func (e NotificationSettingsValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sNotificationSettings.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = NotificationSettingsValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = NotificationSettingsValidationError{}

// Validate checks the field values on DigitalWorkerSettings with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *DigitalWorkerSettings) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on DigitalWorkerSettings with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// DigitalWorkerSettingsMultiError, or nil if none found.
func (m *DigitalWorkerSettings) ValidateAll() error {
	return m.validate(true)
}

func (m *DigitalWorkerSettings) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	// no validation rules for WorkerName

	// no validation rules for WorkerVersion

	// no validation rules for EnableLogging

	if len(errors) > 0 {
		return DigitalWorkerSettingsMultiError(errors)
	}

	return nil
}

// DigitalWorkerSettingsMultiError is an error wrapping multiple validation
// errors returned by DigitalWorkerSettings.ValidateAll() if the designated
// constraints aren't met.
type DigitalWorkerSettingsMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m DigitalWorkerSettingsMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m DigitalWorkerSettingsMultiError) AllErrors() []error { return m }

// DigitalWorkerSettingsValidationError is the validation error returned by
// DigitalWorkerSettings.Validate if the designated constraints aren't met.
type DigitalWorkerSettingsValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e DigitalWorkerSettingsValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e DigitalWorkerSettingsValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e DigitalWorkerSettingsValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e DigitalWorkerSettingsValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e DigitalWorkerSettingsValidationError) ErrorName() string {
	return "DigitalWorkerSettingsValidationError"
}

// Error satisfies the builtin error interface
func (e DigitalWorkerSettingsValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sDigitalWorkerSettings.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = DigitalWorkerSettingsValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = DigitalWorkerSettingsValidationError{}

// Validate checks the field values on FinancialPreferences with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *FinancialPreferences) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on FinancialPreferences with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// FinancialPreferencesMultiError, or nil if none found.
func (m *FinancialPreferences) ValidateAll() error {
	return m.validate(true)
}

func (m *FinancialPreferences) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	// no validation rules for CurrencyPreference

	// no validation rules for FinancialYearStart

	// no validation rules for TaxPercentage

	// no validation rules for TaxCode

	if len(errors) > 0 {
		return FinancialPreferencesMultiError(errors)
	}

	return nil
}

// FinancialPreferencesMultiError is an error wrapping multiple validation
// errors returned by FinancialPreferences.ValidateAll() if the designated
// constraints aren't met.
type FinancialPreferencesMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m FinancialPreferencesMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m FinancialPreferencesMultiError) AllErrors() []error { return m }

// FinancialPreferencesValidationError is the validation error returned by
// FinancialPreferences.Validate if the designated constraints aren't met.
type FinancialPreferencesValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e FinancialPreferencesValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e FinancialPreferencesValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e FinancialPreferencesValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e FinancialPreferencesValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e FinancialPreferencesValidationError) ErrorName() string {
	return "FinancialPreferencesValidationError"
}

// Error satisfies the builtin error interface
func (e FinancialPreferencesValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sFinancialPreferences.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = FinancialPreferencesValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = FinancialPreferencesValidationError{}

// Validate checks the field values on Settings with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Settings) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Settings with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in SettingsMultiError, or nil
// if none found.
func (m *Settings) ValidateAll() error {
	return m.validate(true)
}

func (m *Settings) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	// no validation rules for AppTheme

	if all {
		switch v := interface{}(m.GetNotificationSettings()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, SettingsValidationError{
					field:  "NotificationSettings",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, SettingsValidationError{
					field:  "NotificationSettings",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetNotificationSettings()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return SettingsValidationError{
				field:  "NotificationSettings",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	// no validation rules for PreferredLanguage

	// no validation rules for RiskTolerance

	if all {
		switch v := interface{}(m.GetDigitalWorkerSettings()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, SettingsValidationError{
					field:  "DigitalWorkerSettings",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, SettingsValidationError{
					field:  "DigitalWorkerSettings",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetDigitalWorkerSettings()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return SettingsValidationError{
				field:  "DigitalWorkerSettings",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if all {
		switch v := interface{}(m.GetFinancialPreferences()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, SettingsValidationError{
					field:  "FinancialPreferences",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, SettingsValidationError{
					field:  "FinancialPreferences",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetFinancialPreferences()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return SettingsValidationError{
				field:  "FinancialPreferences",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return SettingsMultiError(errors)
	}

	return nil
}

// SettingsMultiError is an error wrapping multiple validation errors returned
// by Settings.ValidateAll() if the designated constraints aren't met.
type SettingsMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m SettingsMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m SettingsMultiError) AllErrors() []error { return m }

// SettingsValidationError is the validation error returned by
// Settings.Validate if the designated constraints aren't met.
type SettingsValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e SettingsValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e SettingsValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e SettingsValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e SettingsValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e SettingsValidationError) ErrorName() string { return "SettingsValidationError" }

// Error satisfies the builtin error interface
func (e SettingsValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sSettings.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = SettingsValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = SettingsValidationError{}
