import {
  BusinessAccountZodSchema,
  Step1Schema,
  Step1ZodSchema,
  Step2Schema,
  Step2ZodSchema,
  Step3Schema,
  Step3ZodSchema,
  Step4Schema,
  Step4ZodSchema,
  businessAccountSchema,
} from './zod-schema';
import { Form, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '../ui/use-toast';
import { CreateAccountV2RequestClass } from 'src/types/request-response/create-account-v2';
import { BusinessAccountClass } from 'src/types/financial/business-account';
import { AddressClass } from 'src/types/common/address';
import { TagClass } from 'src/types/common/tag';
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  RocketLaunchIcon,
} from '@heroicons/react/20/solid';
import { NavigationItem } from '../Headers/header-with-stacked-flyout-menu';
import { Card } from '../ui/card';
import { cn } from 'src/lib-utils/utils';
import { SidebarBasic } from '../Layout/sidebar-layout/sidebar-basic';
import { BusinessAccountOnBoardingStep1Form } from './Step1/Step1Form';
import { useState } from 'react';
import { BusinessAccountOnBoardingStep2Form } from './Step2/Step2Form';
import { BusinessAccountOnBoardingStep3Form } from './Step3/Step3Form';
import { BusinessAccountOnBoardingStep4Form } from './Step4/Step4Form';
import { SubmitBusinessAccountOnboardingForm } from './Submit/SubmitFormStep';

const defaultValues: Partial<BusinessAccountZodSchema> = {
  accountType: 'PROFILE_TYPE_BUSINESS',
  address: {
    address: '',
    city: '',
    state: '',
    zipcode: '',
    unit: '',
  },
  bio: '',
  companyDescription: '',
  companyEstablishedDate: '',
  companyIndustryType: '',
  companyName: '',
  companyWebsiteUrl: '',
  email: '',
  headline: '',
  id: '',
  isActive: true,
  isEmailVerified: true,
  isPrivate: false,
  phoneNumber: '',
  tags: [],
  username: '',
  verifiedAt: '',
};

export const MultiStepCreateBusinessAccountForm: React.FC<{
  className?: string;
  callback: (data: CreateAccountV2RequestClass) => void;
  instrumentationCallback?: () => void;
}> = ({ className, callback, instrumentationCallback }) => {
  const [step, setStep] = useState(1);

  // The form gets al the state updates and preserves the state
  const form = useForm<BusinessAccountZodSchema>({
    resolver: zodResolver(businessAccountSchema),
    defaultValues,
    mode: 'onChange',
  });

  const step1Default: Partial<Step1ZodSchema> = {
    headline: form.getValues('headline'),
    bio: form.getValues('bio'),
    tags: form.getValues('tags'),
  };

  const step1Form = useForm<Step1ZodSchema>({
    resolver: zodResolver(Step1Schema),
    defaultValues: step1Default,
    mode: 'onChange',
  });

  const step2Default: Partial<Step2ZodSchema> = {
    companyName: form.getValues('companyName'),
    companyDescription: form.getValues('companyDescription'),
    industry: form.getValues('companyIndustryType'),
    companyWebsite: form.getValues('companyWebsiteUrl'),
    companyEstablished: form.getValues('companyEstablishedDate'),
  };

  const step2Form = useForm<Step2ZodSchema>({
    resolver: zodResolver(Step2Schema),
    defaultValues: step2Default,
    mode: 'onChange',
  });

  const addr = form.getValues('address') ?? {};
  const step3Default: Partial<Step3ZodSchema> = {
    address: addr.address,
    city: addr.city,
    state: addr.state,
    zipcode: addr.zipcode,
    unit: addr.unit,
  };

  const step3Form = useForm<Step3ZodSchema>({
    resolver: zodResolver(Step3Schema),
    defaultValues: step3Default,
    mode: 'onChange',
  });

  const step4Default: Partial<Step4ZodSchema> = {
    email: form.getValues('email'),
    userName: form.getValues('username'),
    password: form.getValues('password'),
    confirmPassword: form.getValues('confirmPassword'),
    profileImage: form.getValues('profileImage'),
  };

  const step4Form = useForm<Step4ZodSchema>({
    resolver: zodResolver(Step4Schema),
    defaultValues: step4Default,
    mode: 'onChange',
  });

  const onSubmit = (data: BusinessAccountZodSchema) => {
    // perform validations
    if (data.password !== data.confirmPassword) {
      // show error message
      toast({
        title: 'Failed To Create A Goal',
        description: (
          <p className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            Passowrd & Confirm Passwords do not match
          </p>
        ),
      });
      return;
    }

    const addr = data.address;
    const tags = data.tags;
    const address = new AddressClass({
      address: addr ? addr.address : '',
      city: addr ? addr.city : '',
      state: addr ? addr.state : '',
      zipcode: addr ? addr.zipcode : '',
      unit: addr ? addr.unit : '',
      lattitude: '',
      longitude: '',
    });

    // iterate over tags and create tags
    const refactoredTags = tags?.map((tag) => {
      // Create tag
      const tagObj = new TagClass({
        id: tag.id,
        tagName: tag.tagName,
        tagDescription: tag.tagDescription,
        metadata: tag.metadata,
      });

      return tagObj;
    });

    const businessAcct = new BusinessAccountClass({
      accountType: 'PROFILE_TYPE_BUSINESS',
      address: address,
      bio: data.bio,
      companyDescription: data.companyDescription,
      companyEstablishedDate: data.companyEstablishedDate,
      companyIndustryType: data.companyIndustryType,
      companyName: data.companyName,
      companyWebsiteUrl: data.companyWebsiteUrl,
      email: data.email,
      headline: data.headline,
      id: data.id,
      isActive: data.isActive,
      isEmailVerified: data.isEmailVerified,
      isPrivate: data.isPrivate,
      phoneNumber: data.phoneNumber,
      tags: refactoredTags,
      username: data.username,
      verifiedAt: data.verifiedAt,
    });

    const createUserV2Request = new CreateAccountV2RequestClass({
      businessAccount: businessAcct,
      communityIdsToFollow: [],
      password: data.password,
      profileImage: data.profileImage,
    });

    callback(createUserV2Request);

    // emit a metrics noting the creation of the smart goal
    instrumentationCallback !== undefined && instrumentationCallback();

    toast({
      title: 'Successfully Created A Business Account',
      description: (
        <p className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          Dare To Be Great
        </p>
      ),
    });
  };

  const SmartGoalNavigationItem: NavigationItem[] = [
    {
      name: 'Step 1. Define Your Objective',
      href: '/business-account-registration',
      icon: ChartPieIcon,
      current: step === 1,
    },
    {
      name: 'Step 2. Tell Us About Your Company',
      href: '/business-account-registration',
      icon: DocumentDuplicateIcon,
      current: step === 2,
    },
    {
      name: 'Step 3. Where Are You Located',
      href: '/business-account-registration',
      icon: FolderIcon,
      current: step === 3,
    },
    {
      name: 'Step 4. Define Your Credentials',
      href: '/business-account-registration',
      icon: CalendarIcon,
      current: step === 4,
    },
    {
      name: 'Step 5. Submit Your Application',
      href: '/business-account-registration',
      icon: RocketLaunchIcon,
      current: step === 5,
    },
  ];

  return (
    <Card className={cn('p-[2%] w-full', className)}>
      <div className="flex flex-row gap-2">
        <div className="w-[20%]">
          <SidebarBasic
            navigationItems={SmartGoalNavigationItem}
            userName={''}
            userProfileImage={''}
            className="h-full "
            disableImage={true}
          />
        </div>
        <div className="w-[80%]">
          <Form {...form}>
            <form>
              {step === 1 && (
                <div>
                  <BusinessAccountOnBoardingStep1Form
                    form={step1Form}
                    variant={'first'}
                    setStep={setStep}
                  />
                </div>
              )}
              {step === 2 && (
                <div>
                  <BusinessAccountOnBoardingStep2Form
                    form={step2Form}
                    variant={'middle'}
                    setStep={setStep}
                  />
                </div>
              )}
              {step === 3 && (
                <div>
                  <BusinessAccountOnBoardingStep3Form
                    form={step3Form}
                    variant={'middle'}
                    setStep={setStep}
                  />
                </div>
              )}{' '}
              {step === 4 && (
                <div>
                  <BusinessAccountOnBoardingStep4Form
                    form={step4Form}
                    variant={'middle'}
                    setStep={setStep}
                  />
                </div>
              )}
              {step === 5 && (
                <div>
                  <SubmitBusinessAccountOnboardingForm
                    onSubmit={onSubmit}
                    setStep={setStep}
                    step1Form={step1Form}
                    step2Form={step2Form}
                    step3Form={step3Form}
                    step4Form={step4Form}
                    businessAccountFrom={form}
                    variant={'last'}
                  />
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
    </Card>
  );
};
