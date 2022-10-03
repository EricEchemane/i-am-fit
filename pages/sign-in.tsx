import useUser from 'hooks/useUser';
import LandingComponent from 'components/LandingComponent';
import CreateAccount from 'components/CreateAccount';
import LoadingSkeleton from 'components/shared/LoadingSkeleton';

export default function SignIn() {
    const { error } = useUser({ whenFoundRedirectTo: "/" });

    if (error?.code === 404) return <CreateAccount />;
    if (error?.code === 401) return <LandingComponent />;
    return <LoadingSkeleton />;
}
