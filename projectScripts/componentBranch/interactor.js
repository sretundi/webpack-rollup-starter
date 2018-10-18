export default function ExampleInteractor(arg) {
    // do stuff here
    if(response.status === 'success') {
        return arg;
    } else {
        console.error('interactor error');
        return 'fail';
    }
}
