import { PagamentoModule } from './pagamento.module';

describe('PagamentoModule', () => {
  let pagamentoModule: PagamentoModule;

  beforeEach(() => {
    pagamentoModule = new PagamentoModule();
  });

  it('should create an instance', () => {
    expect(pagamentoModule).toBeTruthy();
  });
});
