import { BusinessAccountZodSchema, businessAccountSchema } from './zod-schema';
import { SubmitHandler, useForm } from 'react-hook-form';
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
  companyEstablished: '',
  industry: '',
  companyName: '',
  companyWebsite: '',
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
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<BusinessAccountZodSchema>({
    resolver: zodResolver(businessAccountSchema),
    defaultValues,
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<BusinessAccountZodSchema> = (
    data: BusinessAccountZodSchema,
  ) => {
    console.log(data);
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
      companyEstablishedDate: data.companyEstablished,
      companyIndustryType: data.industry,
      companyName: data.companyName,
      companyWebsiteUrl: data.companyWebsite,
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
      profileImageUrl: data.profileImageUrl,
      auth0UserId: data.auth0UserId,
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
          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
              <BusinessAccountOnBoardingStep1Form
                setValue={setValue}
                getValue={getValues}
                variant={'first'}
                setStep={setStep}
                register={register}
                errors={errors}
                className="p-[3%]"
              />
            )}
            {step === 2 && (
              <BusinessAccountOnBoardingStep2Form
                setValue={setValue}
                getValue={getValues}
                variant={'middle'}
                setStep={setStep}
                register={register}
                errors={errors}
                className="p-[3%]"
              />
            )}
            {step === 3 && (
              <BusinessAccountOnBoardingStep3Form
                setValue={setValue}
                getValue={getValues}
                variant={'middle'}
                setStep={setStep}
                register={register}
                errors={errors}
                className="p-[3%]"
              />
            )}{' '}
            {step === 4 && (
              <BusinessAccountOnBoardingStep4Form
                setValue={setValue}
                getValue={getValues}
                variant={'middle'}
                setStep={setStep}
                register={register}
                errors={errors}
                className="p-[3%]"
              />
            )}
            {step === 5 && (
              <SubmitBusinessAccountOnboardingForm
                setStep={setStep}
                variant={'last'}
                className="p-[3%]"
              />
            )}
          </form>
        </div>
      </div>
    </Card>
  );
};
