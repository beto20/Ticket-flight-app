import { TicketDto } from './ticket.dto';

describe('TicketDto', () => {
  it('should be defined', () => {
    expect(new TicketDto(true, "","","","",1,"")).toBeDefined();
  });
});
