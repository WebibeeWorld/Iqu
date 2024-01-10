"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import React from "react";

const CardSection = ({
  list,
  idx,
}: {
  list: { title: string; country: string; img: string; para: string };
}) => {
  // const [isFollowed, setIsFollowed] = React.useState(false);
  return (
    <Card className="max-w-[230px] max-h-fit md:!max-w-md p-2">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="lg"
            // src="/avatars/avatar-1.png"
            src={list.img}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {list.title}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {list.country}
            </h5>
          </div>
        </div>
        {/* <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button> */}
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400 h-auto">
        {/* <p className="text-base font-urbanist">
        {list.para}
        </p> */}
        <span className="pt-2">
          #FrontendWithZoey
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardSection;
