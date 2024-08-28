import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// 定义Profile组件
const Profile = () => {
  // 使用useAuth0钩子获取用户信息
  const { user, isAuthenticated } = useAuth0();

  // 定义居中样式
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh' // This assumes the Profile component takes full viewport height
  };

  // 返回组件内容
  return (
    isAuthenticated && (
      <div style={centerStyle}> {/* 应用居中样式 */}
        <article className="column">
          {user?.picture && <img src={user.picture} alt={user.name} />}
          <h2>{user?.name}</h2>
          <ul>
            {/* 遍历user对象的键值对 */}
            {Object.keys(user).map((objKey, index) => (
              <li key={index}>  {/* 为每个键值对创建一个li元素 */}
                {objKey}: {user[objKey]}  {/* 显示键值对 */}
              </li>
            ))}
          </ul>
        </article>
      </div>
    )
  );
};

/*
  user?.picture && <img src={user.picture} alt={user.name}

  1. 检查 user 对象是否存在：如果 user 是 null 或 undefined，整个表达式会短路并返回 undefined，不会执行后面的逻辑。
  2. 访问 user.picture 属性：如果 user 存在，则继续访问 user.picture 属性。
  3. 条件渲染：如果 user.picture 存在且不为 null 或 undefined，则渲染 <img> 元素，否则不渲染。
*/

/*
  user?.name

  1. 检查 user 对象是否存在：如果 user 是 null 或 undefined，整个表达式会短路并返回 undefined，不会执行后面的逻辑。
  2. 访问 user.name 属性：如果 user 存在，则继续访问 user.name 属性。
*/

// 导出Profile组件
export default Profile;
