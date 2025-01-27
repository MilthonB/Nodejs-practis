


export class CreateTodoDtos{

  private constructor(
    public readonly text: string
  ){}

  static create( props:{[key:string]: any} ):[string?,CreateTodoDtos?] {
    const { text } = props;

    if(!text) return ['Text property is required'];

    return [undefined, new CreateTodoDtos(text)];
  }

}