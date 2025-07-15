create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
    -- create a anonymous profile for the user
		-- 삽입되고 있는 행에 new 키워드를 사용해 접근할 수 있음
		if new.raw_app_meta_data is not null then
			if new.raw_app_meta_data ? 'provider' AND new.raw_app_meta_data->>'provider' = 'email' then
			-- substr 은 postgresql 의 function
			-- profile_id는 profile테이블에서 foreign key 이므로 무조건 있어야 한다.
				insert into public.profiles (profile_id, name, username, role) values (new.id,'Anonymous', 'mr.' ||substr(md5(random()::text), 1, 9), 'developer');
			end if;
		end if;
		-- trigger는 항상 return new 해야한다.
		return new;
end;
$$;
-- trigger 작성은 매우 신중해야한다.
create trigger user_to_profile_trigger
after insert on auth.users
for each row execute function public.handle_new_user();
