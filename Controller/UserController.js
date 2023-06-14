/** @format */

const express = require("express");

const userModel = require("../Model/UserModel");

const getAllUsers = async (req, res) => {
  try {
    const getUsers = await userModel.find();
    res.status(200).json({
      message: "Okay",
      data: getUsers,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something Happened",
    });
  }
};

const newUser = async (req, res) => {
  try {
    const { name, phonenumber, password, email, isFemale } = req.body;
    const createUser = await userModel.create({
      name,
      phonenumber,
      password,
      email,
      isFemale,
    });
    res.status(201).json({
      message: "Created a new User",
      data: createUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something Happened",
    });
  }
};
