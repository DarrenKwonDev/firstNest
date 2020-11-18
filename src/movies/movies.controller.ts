import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entitiy';
import { MoviesService } from './movies.service';

@Controller('movies') // 여기에 정의된 부분이 url에 들어갑니다.
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('/search')
  search(@Query('year') searchingYear: number) {
    return `We are searching a movie after year ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    return this.movieService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.movieService.deleteOne(movieId);
  }

  @Patch('/:id')
  update(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
