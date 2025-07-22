-- seed.sql
-- 데이터베이스 시드 파일

-- auth.users 테이블에 사용자 삽입 (트리거가 자동으로 profile 생성)
INSERT INTO auth.users (id) VALUES 
('aca46472-2fdd-4394-bdca-c2aff7a44f3f');

-- categories 테이블에 카테고리 삽입
INSERT INTO categories (name, description) VALUES 
('개발 도구', '개발자를 위한 유용한 도구들'),
('디자인', 'UI/UX 디자인 관련 제품들'),
('마케팅', '마케팅 자동화 및 분석 도구'),
('생산성', '업무 효율성을 높이는 도구들'),
('교육', '온라인 학습 및 교육 플랫폼');

-- products 테이블에 제품 삽입 (모든 제품이 동일한 profile_id 사용)
INSERT INTO products (name, tagline, description, how_it_works, icon, url, stats, profile_id, category_id) VALUES 
('CodeHelper', '개발자를 위한 스마트 코드 어시스턴트', '인공지능 기반으로 코드 작성을 도와주는 도구입니다.', 'AI가 코드를 분석하고 개선 사항을 제안합니다.', 'https://example.com/codehelper-icon.png', 'https://codehelper.com', '{"views": 1250, "reviews": 23}', 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 1),
('DesignFlow', '직관적인 디자인 워크플로우', '디자이너를 위한 협업 및 프로토타이핑 도구입니다.', '드래그 앤 드롭으로 쉽게 디자인하고 팀과 공유합니다.', 'https://example.com/designflow-icon.png', 'https://designflow.com', '{"views": 890, "reviews": 18}', 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 2),
('MarketBoost', '마케팅 캠페인 자동화', 'SNS 마케팅을 자동화하는 플랫폼입니다.', '스케줄링, 분석, 자동 포스팅 기능을 제공합니다.', 'https://example.com/marketboost-icon.png', 'https://marketboost.com', '{"views": 670, "reviews": 15}', 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 3),
('TaskMaster', '스마트 할일 관리', 'AI 기반 작업 우선순위 관리 도구입니다.', '머신러닝으로 작업 패턴을 분석하고 최적의 스케줄을 제안합니다.', 'https://example.com/taskmaster-icon.png', 'https://taskmaster.com', '{"views": 1100, "reviews": 31}', 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 4),
('LearnHub', '개인 맞춤형 학습 플랫폼', '적응형 학습 알고리즘을 사용하는 교육 플랫폼입니다.', '개인의 학습 속도와 스타일에 맞춰 커리큘럼을 조정합니다.', 'https://example.com/learnhub-icon.png', 'https://learnhub.com', '{"views": 2100, "reviews": 45}', 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 5);

-- reviews 테이블에 리뷰 삽입 (모든 리뷰가 동일한 profile_id 사용)
INSERT INTO reviews (product_id, profile_id, rating, review) VALUES 
(1, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 5, '정말 유용한 도구입니다. 코딩 효율이 크게 향상되었어요!'),
(2, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 4, '좋은 기능들이 많지만 가끔 느려질 때가 있어요.'),
(3, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 5, '디자인 워크플로우가 정말 직관적이에요. 추천합니다!'),
(4, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 4, '마케팅 자동화 기능이 훌륭해요. 시간이 많이 절약됩니다.'),
(5, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 5, 'AI 추천 기능이 정말 정확해요. 생산성이 크게 향상되었습니다.');

-- jobs 테이블에 채용 공고 삽입
INSERT INTO jobs (position, overview, responsibilities, qualifications, benefits, skills, company_name, company_logo, company_location, apply_url, job_type, location, salary_range) VALUES 
('Senior Full-stack Developer', '혁신적인 스타트업에서 함께할 시니어 개발자를 찾습니다.', '웹 애플리케이션 개발, 아키텍처 설계, 코드 리뷰', '5년 이상 개발 경험, React/Node.js 능숙', '스톡옵션, 자율출근, 맥북 지급', 'React, Node.js, TypeScript, PostgreSQL', 'TechCorp', 'https://example.com/techcorp-logo.png', '서울 강남구', 'https://techcorp.com/jobs/1', 'full-time', 'hybrid', '$100,000 - $120,000'),
('UI/UX Designer', '사용자 중심의 디자인을 추구하는 디자이너를 모집합니다.', 'UI/UX 디자인, 프로토타이핑, 사용자 리서치', '3년 이상 디자인 경험, Figma 능숙', '연봉협상, 교육비 지원, 자유로운 근무환경', 'Figma, Sketch, Adobe Creative Suite', 'DesignStudio', 'https://example.com/designstudio-logo.png', '서울 홍대', 'https://designstudio.com/careers', 'full-time', 'in-person', '$70,000 - $100,000'),
('Digital Marketing Specialist', '데이터 기반 마케팅 전문가를 찾습니다.', 'SNS 마케팅, 광고 운영, 데이터 분석', '마케팅 경험 2년 이상, Google Analytics 활용 가능', '성과급, 해외연수 기회, 점심 제공', 'Google Ads, Facebook Ads, Analytics', 'MarketingPro', 'https://example.com/marketingpro-logo.png', '부산 해운대구', 'https://marketingpro.com/jobs', 'full-time', 'remote', '$50,000 - $70,000'),
('Product Manager', '제품의 성공을 이끌 PM을 모집합니다.', '제품 기획, 로드맵 수립, 크로스 팀 협업', 'PM 경험 3년 이상, 애자일 방법론 이해', '스톡옵션, 유연근무, 건강검진 지원', 'Product Strategy, Agile, Analytics', 'ProductHub', 'https://example.com/producthub-logo.png', '서울 판교', 'https://producthub.com/careers/pm', 'full-time', 'hybrid', '$120,000 - $150,000'),
('Frontend Developer', 'React 전문 프론트엔드 개발자를 찾습니다.', '웹 애플리케이션 개발, 컴포넌트 설계, 성능 최적화', 'React 3년 이상, TypeScript 경험', '자율출근, 맥북 지급, 간식 무제한', 'React, TypeScript, Next.js, Tailwind CSS', 'FrontendCorp', 'https://example.com/frontendcorp-logo.png', '대구 수성구', 'https://frontendcorp.com/apply', 'part-time', 'remote', '$70,000 - $100,000');

-- topics 테이블에 토픽 삽입
INSERT INTO topics (name, slug) VALUES 
('일반 토론', 'general'),
('개발', 'development'),
('디자인', 'design'),
('창업', 'startup'),
('커리어', 'career');

-- posts 테이블에 게시글 삽입 (모든 게시글이 동일한 profile_id 사용)
INSERT INTO posts (title, content, topic_id, profile_id) VALUES 
('React 19의 새로운 기능들', 'React 19에서 추가된 새로운 기능들에 대해 알아봅시다. Concurrent Features가 정말 인상적이네요!', 2, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f'),
('좋은 UX 디자인의 원칙', '사용자 경험을 개선하는 디자인 원칙들을 공유합니다. 사용자 중심 사고가 가장 중요해요.', 3, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f'),
('스타트업 초기 마케팅 전략', '스타트업 초기에 효과적인 마케팅 전략들을 정리해봤습니다. PMF 찾기가 핵심이에요.', 4, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f'),
('개발자에서 창업가로', '개발자에서 창업가로 전환한 경험을 공유합니다. 기술적 역량과 비즈니스 감각의 균형이 중요해요.', 4, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f'),
('PM 커리어 로드맵', '제품 관리자로서의 커리어 경로에 대해 이야기해봅시다. 다양한 스킬셋이 필요한 직군이에요.', 5, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f');

-- post_replies 테이블에 댓글 삽입 (모든 댓글이 동일한 profile_id 사용)
INSERT INTO post_replies (post_id, parent_id, profile_id, reply) VALUES 
(1, NULL, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 'React 19 정말 기대되네요! Concurrent Features 관련해서 더 자세한 정보가 있나요?'),
(1, NULL, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', '서버 컴포넌트도 안정화된다고 들었는데, 실제로 사용해보셨나요?'),
(2, NULL, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 'UX 디자인 원칙 정말 도움이 되었어요. 특히 사용자 테스트 부분이 인상깊었습니다.'),
(3, NULL, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', '초기 스타트업 마케팅은 정말 어려운 부분이죠. 경험담 감사합니다!'),
(4, NULL, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', '개발자에서 창업가로의 전환, 정말 용기가 필요했을 것 같아요. 존경합니다!');

-- gpt_ideas 테이블에 AI 아이디어 삽입 (claimed_by에 동일한 profile_id 사용)
INSERT INTO gpt_ideas (idea, views, claimed_at, claimed_by) VALUES 
('AI 기반 코드 리뷰 자동화 도구', 156, NULL, NULL),
('음성으로 조작하는 스마트홈 관리 앱', 89, '2024-01-15 10:30:00', 'aca46472-2fdd-4394-bdca-c2aff7a44f3f'),
('실시간 언어 번역 화상회의 플랫폼', 234, NULL, NULL),
('개인 맞춤형 운동 루틴 생성기', 178, '2024-01-20 14:45:00', 'aca46472-2fdd-4394-bdca-c2aff7a44f3f'),
('블록체인 기반 디지털 자산 관리 도구', 67, NULL, NULL);

-- team 테이블에 팀 정보 삽입
INSERT INTO team (product_name, team_size, equity_split, product_stage, roles, product_description) VALUES 
('EcoTracker', 3, 33, 'mvp', '개발자, 디자이너, 마케터', '환경 친화적인 생활습관을 추적하고 보상하는 앱입니다.'),
('FoodieMatch', 4, 25, 'prototype', '개발자 2명, PM, 디자이너', '음식 취향을 기반으로 맛집을 추천하는 소셜 플랫폼입니다.'),
('StudyBuddy', 2, 50, 'idea', '개발자, 교육 전문가', 'AI 튜터와 함께하는 개인 맞춤형 학습 플랫폼입니다.'),
('HealthSync', 5, 20, 'product', '개발자 2명, 디자이너, PM, 의료진', '개인 건강 데이터를 통합 관리하는 헬스케어 앱입니다.'),
('GreenEnergy', 3, 33, 'mvp', '개발자, 에너지 전문가, 마케터', '재생에너지 사용량을 모니터링하고 최적화하는 도구입니다.');

-- message_rooms 테이블에 메시지 룸 삽입
INSERT INTO message_rooms DEFAULT VALUES;
INSERT INTO message_rooms DEFAULT VALUES;
INSERT INTO message_rooms DEFAULT VALUES;
INSERT INTO message_rooms DEFAULT VALUES;
INSERT INTO message_rooms DEFAULT VALUES;

-- messages 테이블에 메시지 삽입 (sender에 동일한 profile_id 사용)
INSERT INTO messages (message_room_id, sender, content, seen) VALUES 
(1, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', '안녕하세요! 프로젝트 관련해서 논의하고 싶은 내용이 있어요.', true),
(2, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', '새로운 제품 아이디어에 대해 의견을 듣고 싶어요.', true),
(3, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 'PM 관련 질문이 있는데 시간 되실 때 답변 부탁드려요.', false),
(4, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', '마케팅 캠페인 결과를 공유드립니다.', false),
(5, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', '코드 리뷰 관련해서 도움이 필요해요.', true);

-- notifications 테이블에 알림 삽입 (source_id와 target_id에 동일한 profile_id 사용)
INSERT INTO notifications (source_id, product_id, post_id, target_id, type) VALUES 
('aca46472-2fdd-4394-bdca-c2aff7a44f3f', NULL, NULL, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 'follow'),
('aca46472-2fdd-4394-bdca-c2aff7a44f3f', 1, NULL, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 'review'),
('aca46472-2fdd-4394-bdca-c2aff7a44f3f', NULL, 1, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 'reply'),
('aca46472-2fdd-4394-bdca-c2aff7a44f3f', 2, NULL, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 'review'),
('aca46472-2fdd-4394-bdca-c2aff7a44f3f', NULL, 2, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f', 'mention');

-- 복합 기본키를 가진 브리지 테이블들에 데이터 삽입 (모두 동일한 profile_id 사용)

-- follows 테이블 (팔로우 관계) - 자기 자신을 팔로우하는 것은 의미가 없으므로 생략하거나 다른 사용자가 필요
-- 이 경우는 스킵하거나 추가 사용자가 필요함

-- product_upvotes 테이블 (제품 업보트)
INSERT INTO product_upvotes (product_id, profile_id) VALUES 
(1, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f');

-- post_upvotes 테이블 (게시글 업보트)
INSERT INTO post_upvotes (post_id, profile_id) VALUES 
(1, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f');

-- gpt_ideas_likes 테이블 (AI 아이디어 좋아요)
INSERT INTO gpt_ideas_likes (gpt_idea_id, profile_id) VALUES 
(1, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f');

-- message_room_members 테이블 (메시지 룸 멤버)
INSERT INTO message_room_members (message_room_id, profile_id) VALUES 
(1, 'aca46472-2fdd-4394-bdca-c2aff7a44f3f');
