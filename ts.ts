interface IRequest{
    request:()=>void;
}
class ARequuest implements IRequest{
    request() {
        console.log('a request impl ');
    }
    
}