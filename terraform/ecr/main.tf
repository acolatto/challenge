provider "aws" {
  version = ">= 2.28.1"
  region  = "us-east-1"
}

resource "aws_ecr_repository" "main" {
  name                 = "challenge-api"
  image_tag_mutability = "MUTABLE"

}

resource "aws_ecr_repository" "web" {
  name                 = "challenge-web"
  image_tag_mutability = "MUTABLE"

}