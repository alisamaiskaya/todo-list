CREATE TABLE todos 
(   id serial not null,
    "taskDescription" text not null,
    "createdAt" timestamptz not null default now(),
    finished boolean not null default false,
    "updateAt" timestamptz default null,
    primary key (id)
);