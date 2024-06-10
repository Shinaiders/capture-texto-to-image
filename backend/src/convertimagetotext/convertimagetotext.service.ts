/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@nestjs/common";
import { createWorker } from "tesseract.js";

import { CreateConvertimagetotextDto } from "./dto/create-convertimagetotext.dto";

import { UpdateConvertimagetotextDto } from "./dto/update-convertimagetotext.dto";

@Injectable()
export class ConvertimagetotextService {
  async create(createConvertimagetotextDto: CreateConvertimagetotextDto) {
    console.log('Iniciando a criação de workers...');
    const workers = [];
    const numOfWorkers = 4; // Defina o número de workers que você deseja criar

    for (let i = 0; i < numOfWorkers; i++) {
      console.log(`Criando worker ${i+1}...`);
      const worker = createWorker();
      workers.push(worker);
    }
    const worker = await createWorker();
    console.log('Workers criados com sucesso.');

    // await worker.load();
    await worker.reinitialize("por");
    

    const {
      data: { text },
    } = await worker.recognize(createConvertimagetotextDto.img);

    await worker.terminate();

    const dados = { result: text };

    console.log('Imagem Lida Com Sucesso.....')

    return dados;
  }

  findAll() {
    return `This action returns all convertimagetotext`;
  }

  findOne(id: number) {
    return `This action returns a #${id} convertimagetotext`;
  }

  update(id: number, updateConvertimagetotextDto: UpdateConvertimagetotextDto) {
    return `This action updates a #${id} convertimagetotext`;
  }

  remove(id: number) {
    return `This action removes a #${id} convertimagetotext`;
  }
}
