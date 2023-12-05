
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { FaMedal } from 'react-icons/fa';
import useEnrollment from '../../../Hooks/useEnrollment';
import { useParams } from 'react-router-dom';

const CourseEnrollment = () => {
  const { isEnrolled } = useEnrollment(); 
  const { id } = useParams();
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  const handleError = error => {
    console.log('Failed to load Stripe : ', error);
  };


  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        {isEnrolled ? (
          <div className="text-center">
            <div className="flex items-center justify-center bg-yellow-500 text-white font-bold text-xl rounded-full h-16 w-16 mb-4">
              <FaMedal className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold">You are already enrolled!</p>
            <p className="text-gray-600 mt-4">
              You have successfully enrolled in this course.
            </p>
          </div>
        ) : (
          <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Enroll in Course
            </h1>

            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center justify-center bg-yellow-500 text-white font-bold text-xl rounded-full h-16 w-16 mr-4">
                <FaMedal />
              </div>
              <p className="text-xl font-semibold">Course Enrollment</p>
            </div>

            <p className="text-center text-gray-600 mb-8">
              Unlock premium content and features by enrolling in this course.
            </p>

            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl mb-4 font-bold">Pay the Course Fee</p>
              <Elements stripe={stripePromise} onError={handleError}>
                <CheckoutForm id={id} />
              </Elements>
              <p className="text-gray-500 text-sm mt-3">
                Secure Payment Gateway
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseEnrollment;
