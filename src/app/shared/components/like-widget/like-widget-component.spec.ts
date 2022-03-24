import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
    }).compileComponents();
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  // TESTA SE NO MOMENTO DA FIXTURE SER CRIADA,
  // OCORREU ALGUM PROBLEMA PARA A CRIAÇÃO DA INSTÂNCIA DO COMPONENTE
  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  // TESTA SE GERA AUTOMATICAMENTE UM ID QUANDO ELE NÃO É PASSADO COMO PARâMETRO
  it('Should auto-generate ID during ngOnInit when (@Input id) is NOT assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  // TESTA SE AO PASSAR UM ID ELE CRIA UM ID RESPEITANDO O QUE FOI PASSADO COMO PARÂMETRO
  it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned ', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  // TESTA SE UMA OUTPUT FOI EMITIDA AO CHAMAR A FUNÇÃO
  it(`#${LikeWidgetComponent.prototype.like.name}
  should trigger (@Output liked) when called`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
