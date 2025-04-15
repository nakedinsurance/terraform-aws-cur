terraform {
  required_version = ">= 0.13, < 2.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.29"
      configuration_aliases = [ aws.cur ]
    }

    archive = {
      source  = "hashicorp/archive"
      version = "~> 2.0"
    }
  }
}
