'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import BasicInfoStep from './BasicInfoStep'
import HealthHistoryStep from './HealthHistoryStep'
import AddictionJourneyStep from './AddictionJourneyStep'
import LifestyleStep from './LifestyleStep'
import PrivacyStep from './PrivacyStep'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

const steps = [
  'basic-info',
  'health-history',
  'addiction-journey',
  'lifestyle',
  'privacy'
] as const

interface FormData {
  name: string
  age: string
  gender: string
  livingSituation: string
  medicalConditions: string
  takingMedications: boolean
  hasSubstanceUseDisorder: boolean
  substanceTypes: string[]
  otherSubstance: string
  recoveryDuration: string
  hadRelapse: boolean
  relapseTriggers: string[]
  otherTriggers: string
  stressLevel: string
  sleepHours: string
  physicalActivity: string
  useWearables: boolean
  acceptAiSuggestions: boolean
  shareAnonymousData: boolean
}

export default function OnboardingForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    gender: '',
    livingSituation: '',
    medicalConditions: '',
    takingMedications: false,
    hasSubstanceUseDisorder: false,
    substanceTypes: [],
    otherSubstance: '',
    recoveryDuration: '',
    hadRelapse: false,
    relapseTriggers: [],
    otherTriggers: '',
    stressLevel: '',
    sleepHours: '',
    physicalActivity: '',
    useWearables: false,
    acceptAiSuggestions: false,
    shareAnonymousData: false
  })

  const updateFormData = (stepData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...stepData }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = async () => {
    try {
      console.log('Form submitted:', formData)
      router.push('/onboarding/success')
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  const StepComponent = () => {
    const stepComponents = [
      BasicInfoStep,
      HealthHistoryStep,
      AddictionJourneyStep,
      LifestyleStep,
      PrivacyStep
    ]
    const Step = stepComponents[currentStep]
    return (
      <Step data={formData} updateFields={updateFormData} onNext={handleNext} />
    )
  }

  return (
    <div className="space-y-8">
      <Progress value={progress} className="w-full" />
      <div className="mt-8">
        <StepComponent />
      </div>
      <div className="flex justify-between mt-8">
        <Button onClick={handleBack} disabled={currentStep === 0} variant="outline">
          Back
        </Button>
        <Button onClick={handleNext}>
          {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  )
}