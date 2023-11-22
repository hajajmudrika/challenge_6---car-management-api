const path = require("path");
const fs = require("fs");
const Resizer = require("../../utils/Resizer");
const carRepository = require('../repositories/carRepository');
const { randomID } = require("../../utils/randomize");

class carService {
  /**
   * @function getList carService.js
   * @author Rizky Adji Pangestu
   */
  static async getList(filter, offset = 0, limit = 15) {
    try {
      let whereClause = new Object({
        where: {
          deleted: false
        },
        offset: offset,
        limit: limit
      });
      if (filter) {
        whereClause.where.size_id = filter;
        console.log(whereClause);
      }
      let { count, rows } = await carRepository.findAllPartially(whereClause);
      
      return {
        data: rows,
        total: count,
        offset: offset,
        limit: limit
      };
    } catch (error) {
      throw error;
    }
  }

  static get(id) {
    try {
      // Tulis kode logika anda disini
      return carRepository.find(id);
    } catch (error) {
      throw error;
    }
  }

  static async create({ size_id, name, price, photo, createdBy }) {
    try {
      if (!size_id) {
        return {
          status: false,
          status_code: 400,
          message: "Masukkan Size Id",
          data: {
            created_cars: null,
          },
        };
      }

      if (!name) {
        return {
          status: false,
          status_code: 400,
          message: "Masukkan Nama",
          data: {
            created_cars: null,
          },
        };
      }

      if (!price) {
        return {
          status: false,
          status_code: 400,
          message: "Masukkan Harga",
          data: {
            created_cars: null,
          },
        };
      }

      const createdCar = await carRepository.create({
        id: randomID(),
        size_id,
        name,
        price,
        photo,
        createdBy: createdBy ?? "System",
        createdAt: new Date(),
        updatedBy: createdBy ?? "System",
        updatedAt: new Date(),
        deleted: false,
      });

      return {
        status: true,
        status_code: 201,
        message: "Car created successfully",
        data: {
          created_car: createdCar,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          registered_user: null,
        },
      };
    }
  }

  static async update({ id, size_id, name, price, photo, updatedBy }) {
    try {
      if (!id) {
        return {
          status: false,
          status_code: 400,
          message: "Masukkan Id",
          data: {
            created_cars: null,
          },
        };
      }

      if (!size_id) {
        return {
          status: false,
          status_code: 400,
          message: "Masukkan Size Id",
          data: {
            created_cars: null,
          },
        };
      }

      if (!name) {
        return {
          status: false,
          status_code: 400,
          message: "Masukkan Nama",
          data: {
            created_cars: null,
          },
        };
      }

      if (!price) {
        return {
          status: false,
          status_code: 400,
          message: "Masukan Harga",
          data: {
            created_cars: null,
          },
        };
      }

      const updatedCar = await carRepository.update(id, {
        size_id,
        name,
        price,
        updatedBy: updatedBy ?? "System",
        updatedAt: new Date(),
      });

      return {
        status: true,
        status_code: 201,
        message: "Car updated successfully",
        data: {
          updated_car: updatedCar,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          updated_car: null,
        },
      };
    }
  }

  static async delete({ id, deletedBy }) {
    try {
      const deletedCar = await carRepository.delete(id, deletedBy);

      return {
        status: true,
        status_code: 200,
        message: "Car deleted successfully",
        data: {
          deleted_car: deletedCar,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          deleted_car: null,
        },
      };
    }
  }

}

module.exports = carService;