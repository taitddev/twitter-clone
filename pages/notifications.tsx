import Form from "@/components/Form";
import NotificationsFeed from "@/components/NotificationsFeed";
import PostFeed from "@/components/posts/PostFeed";

const Notifications = () => {
  return (
    <>
      <Form placeholder="What's happening?" />
      <NotificationsFeed />
    </>
  );
};

export default Notifications;
