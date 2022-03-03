import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from 'src/models/book.model';
import { BooksService } from 'src/services/books.services';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}
  @Get()
  async getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  async getOne(@Param() params): Promise<Book> {
    return this.booksService.getOne(params.id) || null;
  }

  @Post()
  async create(@Body() product: Book) {
    this.booksService.create(product);
  }

  @Put(':id')
  async update(@Body() product: Book): Promise<[number, Book[]]> {
    return this.booksService.update(product);
  }

  @Delete(':id')
  async delete(@Param() params) {
    this.booksService.delete(params.id);
  }
}
