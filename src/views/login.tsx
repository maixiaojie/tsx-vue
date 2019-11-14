import { createComponent } from '@vue/composition-api';
const Login = createComponent({
    name: 'Index',
    setup() {
        return () => (
            <div>
                <h1>login</h1>
            </div>
        )
    }
})
export default Login;